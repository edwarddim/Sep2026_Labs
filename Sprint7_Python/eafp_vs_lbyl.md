# EAFP vs LBYL in Python

## Table of Contents

1. [The Two Styles](#1-the-two-styles)
2. [When to Prefer EAFP](#2-when-to-prefer-eafp)
3. [When to Prefer LBYL](#3-when-to-prefer-lbyl)
4. [Common EAFP Mistakes](#4-common-eafp-mistakes)
5. [Combining Both](#5-combining-both)
6. [Decision Checklist](#6-decision-checklist)

---

## 1. The Two Styles

**LBYL: Look Before You Leap.** Check that an operation will succeed before you do it.

```python
if "email" in user:
    send(user["email"])
else:
    print("No email on file")
```

**EAFP: Easier to Ask Forgiveness than Permission.** Just do the operation, and handle the exception if it fails.

```python
try:
    send(user["email"])
except KeyError:
    print("No email on file")
```

Python's culture leans toward EAFP. Exceptions are a normal part of the language, and many built-ins (`int()`, `open()`, `dict[key]`, `next()`) report failure by raising one. But "Pythonic" doesn't mean "always EAFP." Each style fits different situations.

**The core question:** *Is failure the unusual case, and is it safe to just try?*

- Yes to both → **EAFP**
- Failure is common, or trying has side effects you can't undo → **LBYL**

---

## 2. When to Prefer EAFP

### 2.1 When the check and the action can drift apart (race conditions)

This is the strongest argument for EAFP. With LBYL, something can change **between** the check and the action.

```python
import os

# LBYL: race condition
if os.path.exists("config.json"):
    # Another process could delete the file right here
    with open("config.json") as f:      # may still raise FileNotFoundError
        config = f.read()
```

```python
# EAFP: no gap between check and action
try:
    with open("config.json") as f:
        config = f.read()
except FileNotFoundError:
    config = "{}"
```

The LBYL version looks safe but isn't: it still needs a `try` to be correct. This is called a **TOCTOU** bug (time-of-check to time-of-use). The same applies to:

- Files and directories (exists, readable, writable)
- Database rows that other users can modify or delete
- Network resources
- Shared data between threads

**Creating a file only if it doesn't exist:**

```python
# LBYL: two processes can both pass the check and overwrite each other
if not os.path.exists("lock.txt"):
    with open("lock.txt", "w") as f:
        f.write("locked")

# EAFP: the "x" mode makes check-and-create one atomic step
try:
    with open("lock.txt", "x") as f:
        f.write("locked")
except FileExistsError:
    print("Already locked by another process")
```

**Creating a directory:**

```python
try:
    os.mkdir("output")
except FileExistsError:
    pass

# Or let the standard library do the EAFP for you:
os.makedirs("output", exist_ok=True)
```

### 2.2 When the check would duplicate the work

Some checks basically require doing the operation to know whether it'll work. Converting strings to numbers is the classic case.

```python
# LBYL: incomplete and fragile
value = "-3.5"
if value.isdigit():          # False for "-3", "3.5", " 7", "1e3"
    number = int(value)

# Writing a correct check means re-implementing the parser
```

```python
# EAFP: the conversion is the validation
def to_number(value):
    try:
        return float(value)
    except ValueError:
        return None

to_number("3.5")    # 3.5
to_number("-2")     # -2.0
to_number("1e3")    # 1000.0
to_number("abc")    # None
```

Same idea for parsing dates, JSON, and URLs:

```python
import json
from datetime import datetime

try:
    data = json.loads(raw_text)
except json.JSONDecodeError as e:
    print(f"Invalid JSON at line {e.lineno}")

try:
    start = datetime.strptime(date_str, "%Y-%m-%d")
except ValueError:
    print(f"Bad date: {date_str!r}")
```

### 2.3 When failure is rare (the happy path is the common path)

If the operation almost always succeeds, LBYL pays for a check every single time to guard against something that rarely happens. EAFP only pays when something actually goes wrong.

```python
# Nearly every record has a "price" key
for record in records:
    try:
        total += record["price"]
    except KeyError:
        log_missing(record)
```

In modern Python (3.11+), entering a `try` block costs essentially nothing when no exception is raised. Raising and catching an exception *is* relatively expensive, which is why this reasoning flips when failure is common (see 3.2).

### 2.4 Duck typing: caring what an object can do, not what it is

Python favors checking behavior over checking types. EAFP lets any object that "quacks" work.

```python
# LBYL: rejects things that would have worked
def total_length(items):
    if isinstance(items, list):
        return sum(len(x) for x in items)
    raise TypeError("Expected a list")

total_length(("a", "bb"))   # TypeError, even though a tuple works fine
```

```python
# EAFP: works with lists, tuples, sets, generators, custom classes...
def total_length(items):
    try:
        return sum(len(x) for x in items)
    except TypeError:
        raise TypeError("Expected an iterable of sized objects") from None
```

Another example, calling an optional method:

```python
# LBYL
if hasattr(obj, "close"):
    obj.close()

# EAFP
try:
    obj.close()
except AttributeError:
    pass
```

> Careful: the EAFP version above also catches an `AttributeError` raised *inside* `close()`, which could hide a real bug. For optional methods, LBYL with `hasattr` or `getattr(obj, "close", None)` is often the safer choice. See section 4.

### 2.5 When there are many ways to fail

Some operations can fail for lots of reasons. Checking them all up front is long and still likely to miss one.

```python
# LBYL: and this still doesn't cover every case
if (os.path.exists(path)
        and os.path.isfile(path)
        and os.access(path, os.R_OK)):
    with open(path) as f:
        text = f.read()   # could still fail: encoding, file locked, disk error...
```

```python
# EAFP: handle the outcomes you care about
try:
    with open(path, encoding="utf-8") as f:
        text = f.read()
except FileNotFoundError:
    print("File doesn't exist")
except IsADirectoryError:
    print("That's a folder, not a file")
except PermissionError:
    print("No permission to read it")
except UnicodeDecodeError:
    print("Not a UTF-8 text file")
```

---

## 3. When to Prefer LBYL

### 3.1 When the action has side effects you can't undo

If an operation might partly finish before failing, check first so you don't leave things half done.

```python
# EAFP: dangerous
def transfer(source, dest, amount):
    try:
        dest.balance += amount        # step 1 succeeds
        source.withdraw(amount)       # step 2 raises InsufficientFunds
    except InsufficientFunds:
        print("Transfer failed")      # but dest already got the money!
```

```python
# LBYL: validate before changing anything
def transfer(source, dest, amount):
    if amount <= 0:
        raise ValueError("Amount must be positive")
    if source.balance < amount:
        raise InsufficientFunds(f"Balance is only {source.balance}")
    source.withdraw(amount)
    dest.balance += amount
```

Other places this matters:

- Sending emails, SMS, or notifications (you can't unsend)
- Charging a payment
- Writing several files or database rows where all-or-nothing matters
- Deleting things

```python
# Check every file before deleting any of them
to_delete = [Path(p) for p in paths]
missing = [p for p in to_delete if not p.exists()]
if missing:
    raise FileNotFoundError(f"Not found, nothing deleted: {missing}")
for p in to_delete:
    p.unlink()
```

> LBYL here doesn't remove race conditions (2.1). For truly critical operations, use transactions (database transactions, writing to a temp file then renaming). LBYL is still the right first step: it stops the predictable failures before anything changes.

### 3.2 When failure is common (it's an expected outcome, not an exception)

If the "failure" case happens often, it's not really exceptional. A plain `if` is clearer and faster than raising and catching exceptions repeatedly.

```python
# Half the words aren't in the dictionary yet
# EAFP: raises a KeyError on every new word
counts = {}
for word in words:
    try:
        counts[word] += 1
    except KeyError:
        counts[word] = 1
```

```python
# LBYL-style (or better, an idiom that avoids both)
counts = {}
for word in words:
    counts[word] = counts.get(word, 0) + 1

# Best: use the right tool
from collections import Counter
counts = Counter(words)
```

Another example, filtering mixed data:

```python
rows = ["12", "", "N/A", "7", "", "3"]

# Empty and "N/A" are common and expected, so check for them directly
numbers = []
for value in rows:
    if value in ("", "N/A"):
        continue
    numbers.append(int(value))
```

A reasonable rule of thumb: if you'd expect the failure more than occasionally, use LBYL.

### 3.3 When you need to validate user input and give helpful messages

For forms, CLI arguments, and API requests, you usually want to check everything and report **all** the problems at once, with clear messages. An exception stops at the first problem.

```python
# EAFP: user fixes one error, resubmits, finds the next one...
def register(data):
    try:
        age = int(data["age"])
        email = data["email"]
        ...
    except (KeyError, ValueError) as e:
        return f"Error: {e}"     # "Error: 'email'" is not a helpful message
```

```python
# LBYL: collect every problem with a clear explanation
def validate_registration(data):
    errors = []

    username = data.get("username", "").strip()
    if not username:
        errors.append("Username is required.")
    elif len(username) < 3:
        errors.append("Username must be at least 3 characters.")

    email = data.get("email", "")
    if "@" not in email:
        errors.append("Enter a valid email address.")

    age = data.get("age", "")
    if not age.isdigit():
        errors.append("Age must be a whole number.")
    elif not 13 <= int(age) <= 120:
        errors.append("Age must be between 13 and 120.")

    return errors

problems = validate_registration(form)
if problems:
    for p in problems:
        print("-", p)
```

### 3.4 When the check is simple and makes intent clearer

Sometimes an `if` simply reads better. Don't use `try` just to look Pythonic.

```python
# EAFP: awkward
try:
    first = items[0]
except IndexError:
    first = None

# LBYL: clearer
first = items[0] if items else None
```

```python
# EAFP: unclear what you're protecting against
try:
    result = total / count
except ZeroDivisionError:
    result = 0

# LBYL: zero count is a known, meaningful case
result = total / count if count else 0
```

Both versions of the division example are fine. Pick the one that best tells the reader what's going on. If a zero count is a normal situation (no orders yet), the `if` says so directly.

### 3.5 When the try block would be too broad to be safe

If you can't wrap *only* the risky line, the `try` may catch errors from code you didn't mean to protect.

```python
# EAFP: KeyError could come from config, process(), OR save()
try:
    value = config["threshold"]
    result = process(data, value)   # bug in here raises KeyError...
    save(result)
except KeyError:
    value = DEFAULT                  # ...and gets silently "handled" as a missing key
```

```python
# LBYL: only the thing you meant to check is checked
value = config.get("threshold", DEFAULT)
result = process(data, value)
save(result)
```

### 3.6 When checking state, not handling errors

If you're choosing between two normal paths based on what something is, that's just program logic. Use `if`.

```python
# These are normal branches, not error handling
if user.is_admin:
    show_admin_panel()

if path.suffix == ".csv":
    load_csv(path)
elif path.suffix == ".json":
    load_json(path)

if response.status_code == 404:
    return None
```

---

## 4. Common EAFP Mistakes

### 4.1 Bare `except`

```python
# Bad: catches everything, including KeyboardInterrupt and typos in your code
try:
    value = int(text)
except:
    value = 0

# Good: catch only what you expect
try:
    value = int(text)
except ValueError:
    value = 0
```

### 4.2 A try block that's too big

Keep the `try` block to the single operation that might fail. Use `else` for the code that should run only on success.

```python
# Bad
try:
    f = open(path)
    data = parse(f.read())
    results = analyze(data)
    report(results)
except FileNotFoundError:
    print("Missing file")

# Good
try:
    f = open(path)
except FileNotFoundError:
    print("Missing file")
else:
    with f:
        data = parse(f.read())
    results = analyze(data)
    report(results)
```

### 4.3 Swallowing errors silently

```python
# Bad: failure disappears without a trace
try:
    send_report()
except Exception:
    pass

# Better: at least record it
import logging

try:
    send_report()
except ConnectionError:
    logging.exception("Could not send report")
```

If you really do want to ignore one specific exception, `contextlib.suppress` makes that intent explicit:

```python
from contextlib import suppress

with suppress(FileNotFoundError):
    os.remove("temp.txt")
```

### 4.4 Catching an exception the code inside might also raise

```python
# Risky: AttributeError from *inside* obj.save() looks like "no save method"
try:
    obj.save()
except AttributeError:
    print("Object can't be saved")

# Safer: look up the method first, then call it outside the try
save = getattr(obj, "save", None)
if save is None:
    print("Object can't be saved")
else:
    save()
```

---

## 5. Combining Both

Real code often uses both styles together: **LBYL for predictable, cheap-to-check conditions; EAFP for the operation itself.**

```python
from pathlib import Path

def load_settings(path_str):
    # LBYL: cheap input validation with a clear message
    if not path_str:
        raise ValueError("A settings path is required")

    path = Path(path_str)
    if path.suffix != ".json":
        raise ValueError(f"Settings must be a .json file, got {path.suffix!r}")

    # EAFP: the file system can change at any moment
    try:
        text = path.read_text(encoding="utf-8")
    except FileNotFoundError:
        return {}

    # EAFP: parsing is its own validation
    try:
        return json.loads(text)
    except json.JSONDecodeError as e:
        raise ValueError(f"{path} has invalid JSON on line {e.lineno}") from e
```

Another example, processing a CSV row:

```python
def parse_row(row, line_num):
    # LBYL: blank lines are common and expected
    if not any(cell.strip() for cell in row.values()):
        return None

    # EAFP: conversion is the validation, bad values are rare
    try:
        return {
            "name": row["name"].strip(),
            "salary": float(row["salary"]),
        }
    except (KeyError, ValueError) as e:
        logging.warning("Line %d skipped: %s", line_num, e)
        return None
```

---

## 6. Decision Checklist

| Situation                                                    | Prefer   |
|--------------------------------------------------------------|----------|
| Something else could change the resource between check and use (files, DB, network, threads) | **EAFP** |
| The only real check is to attempt the operation (parsing, conversion) | **EAFP** |
| Failure is rare                                              | **EAFP** |
| You want to accept any object that behaves correctly (duck typing) | **EAFP** |
| There are many different ways the operation can fail         | **EAFP** |
| The action has side effects that can't be undone             | **LBYL** |
| Failure is common and expected                               | **LBYL** |
| Validating user input and reporting all problems             | **LBYL** |
| A simple `if` states the intent more clearly                 | **LBYL** |
| The `try` would have to wrap more than the one risky line    | **LBYL** |
| Choosing between normal branches of program logic            | **LBYL** |

**Quick test before you write a `try`:**

1. Can I wrap *just* the one line that might fail?
2. Am I catching a *specific* exception?
3. Is failure genuinely unusual?
4. If it fails halfway, is everything still in a consistent state?

If all four are yes, EAFP is a good fit. If any is no, consider LBYL or a mix of both.

Also check whether Python already has a tool that handles the case for you, like `dict.get()`, `Counter`, `defaultdict`, `getattr(obj, name, default)`, `next(iterator, default)`, `os.makedirs(..., exist_ok=True)`, or `contextlib.suppress`. These are often more Pythonic than writing either style by hand.
