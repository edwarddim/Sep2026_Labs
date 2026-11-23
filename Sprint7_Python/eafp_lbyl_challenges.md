# EAFP vs LBYL: Challenge Workbook

Practice deciding **when** to ask forgiveness (EAFP) and **when** to look before you leap (LBYL). Background reading: [eafp_vs_lbyl.md](eafp_vs_lbyl.md).

## How to Use This Workbook

Each challenge gives you:

- **The task**: a function to write, with its rules.
- **Starter code**: copy it into a `.py` file.
- **Tests**: paste them below your function and run the file. If you see `All tests passed`, you're done.
- **Decide**: before you code, write down whether you'll use **EAFP**, **LBYL**, or **both**, and one sentence on why.
- **Hint** and **Solution**: hidden in collapsible sections. Try the challenge first.

The style choice is part of the challenge. Passing the tests with the "wrong" style still counts as working code, but compare your reasoning with the solution's explanation.

| #  | Challenge                          | Difficulty |
|----|------------------------------------|------------|
| 1  | Parse a Port Number                | ★☆☆        |
| 2  | Look Up a Nested Config Value      | ★☆☆        |
| 3  | Read the First Line of a File      | ★☆☆        |
| 4  | Count Words                        | ★☆☆        |
| 5  | Fulfill an Order                   | ★★☆        |
| 6  | Validate a Signup Form             | ★★☆        |
| 7  | Total Size of Anything             | ★★☆        |
| 8  | Create a File Without Overwriting  | ★★☆        |
| 9  | Average Messy Sensor Readings      | ★★☆        |
| 10 | Spot the Bug: The Greedy `try`     | ★★★        |
| 11 | Delete All or Nothing              | ★★★        |
| 12 | Run Optional Plugin Hooks          | ★★★        |
| 13 | You Decide: Scenario Questions     | ★★★        |

---

## Challenge 1: Parse a Port Number

**Task:** Write `parse_port(text)` that turns user input into a network port number.

- Return the port as an `int` if `text` is a whole number from **1 to 65535**. Surrounding whitespace is fine.
- Return `None` for anything else, including `None` itself.

```python
def parse_port(text):
    ...
```

<!-- tests:1 -->
```python
assert parse_port("8080") == 8080
assert parse_port(" 443 ") == 443
assert parse_port("0") is None
assert parse_port("70000") is None
assert parse_port("abc") is None
assert parse_port("80.5") is None
assert parse_port("") is None
assert parse_port(None) is None
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

How would you check whether a string is a valid integer without actually converting it? Think about `"-5"`, `" 7 "` and `"+80"`. Once you have a number, how hard is the range check?

</details>

<details>
<summary>Solution</summary>

<!-- solution:1 -->
```python
def parse_port(text):
    try:
        port = int(text)
    except (TypeError, ValueError):
        return None
    if 1 <= port <= 65535:
        return port
    return None
```

**Both.** Converting is EAFP because the only reliable way to know whether `int()` will work is to call it. `str.isdigit()` gets `"-5"` and `" 7 "` wrong. The range check is LBYL because it's a simple, cheap condition on a value you already have. `TypeError` covers `None` (and other non-strings).

</details>

---

## Challenge 2: Look Up a Nested Config Value

**Task:** Write `get_nested(data, path, default=None)`. `path` is a dot-separated string like `"database.host"`.

- Return the value at that path.
- Return `default` if any key along the way is missing, **or** if you hit something that isn't a dictionary.

```python
def get_nested(data, path, default=None):
    ...
```

<!-- tests:2 -->
```python
config = {
    "database": {"host": "localhost", "port": 5432, "options": {"ssl": True}},
    "debug": False,
    "name": "app",
}
assert get_nested(config, "database.host") == "localhost"
assert get_nested(config, "database.options.ssl") is True
assert get_nested(config, "debug") is False
assert get_nested(config, "database.user") is None
assert get_nested(config, "database.user", "admin") == "admin"
assert get_nested(config, "cache.size", 0) == 0
assert get_nested(config, "name.first", "?") == "?"     # "app" is not a dict
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

With LBYL, how many checks do you need at each level? (Is it a dict? Does it have the key?) What happens when the value is a list or a string instead?

</details>

<details>
<summary>Solution</summary>

<!-- solution:2 -->
```python
def get_nested(data, path, default=None):
    current = data
    try:
        for key in path.split("."):
            current = current[key]
    except (KeyError, TypeError):
        return default
    return current
```

**EAFP.** Each level could fail in more than one way: the key could be missing (`KeyError`), or the value could be a string, number or `None` that can't be indexed by a key (`TypeError`). Checking all of that up front would take more code than the lookup itself. The `try` covers only the lookup loop, so it can't hide unrelated bugs.

</details>

---

## Challenge 3: Read the First Line of a File

**Task:** Write `read_first_line(path)`.

- Return the first line of the file without its trailing newline.
- Return `""` for an empty file.
- Return `None` if the file doesn't exist.

```python
def read_first_line(path):
    ...
```

<!-- tests:3 -->
```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as tmp:
    sample = Path(tmp) / "sample.txt"
    sample.write_text("first\nsecond\n", encoding="utf-8")
    empty = Path(tmp) / "empty.txt"
    empty.write_text("", encoding="utf-8")

    assert read_first_line(sample) == "first"
    assert read_first_line(empty) == ""
    assert read_first_line(Path(tmp) / "missing.txt") is None
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

Suppose you check `os.path.exists(path)` first. What could happen between that check and `open()`?

</details>

<details>
<summary>Solution</summary>

<!-- solution:3 -->
```python
def read_first_line(path):
    try:
        with open(path, encoding="utf-8") as f:
            return f.readline().rstrip("\n")
    except FileNotFoundError:
        return None
```

**EAFP.** The file system is shared with every other program on the computer. Another process could delete the file between an `exists()` check and `open()`, so the LBYL version would *still* need a `try`. This gap is called a time-of-check to time-of-use (TOCTOU) bug.

</details>

---

## Challenge 4: Count Words

**Task:** Write `count_words(text)` that returns a dictionary mapping each lowercase word to how many times it appears. Split on whitespace; ignore punctuation handling.

```python
def count_words(text):
    ...
```

<!-- tests:4 -->
```python
assert count_words("the cat and the hat") == {"the": 2, "cat": 1, "and": 1, "hat": 1}
assert count_words("Go go GO") == {"go": 3}
assert count_words("") == {}
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

The EAFP version does `counts[word] += 1` and catches `KeyError`. How often will that `KeyError` happen in a typical piece of text? Is it really "exceptional"?

</details>

<details>
<summary>Solution</summary>

<!-- solution:4 -->
```python
from collections import Counter

def count_words(text):
    return dict(Counter(text.lower().split()))
```

Without `Counter`:

```python
def count_words(text):
    counts = {}
    for word in text.lower().split():
        counts[word] = counts.get(word, 0) + 1
    return counts
```

**Neither: use the idiom (LBYL in spirit).** The "missing key" case happens once for *every distinct word*, which is very common. Raising and catching an exception that often is slower and makes a normal situation look like an error. When Python has a built-in tool for the case (`dict.get`, `Counter`, `defaultdict`), use it.

</details>

---

## Challenge 5: Fulfill an Order

**Task:** Write `fulfill_order(inventory, order)`. Both arguments are dictionaries mapping item names to quantities.

- If every item in the order is in stock in the requested quantity, subtract the quantities from `inventory`.
- Otherwise, raise `ValueError` and leave `inventory` **completely unchanged**.
- Quantities in the order must be positive; raise `ValueError` if not.

```python
def fulfill_order(inventory, order):
    ...
```

<!-- tests:5 -->
```python
stock = {"apple": 5, "pear": 3, "plum": 0}

fulfill_order(stock, {"apple": 2, "pear": 1})
assert stock == {"apple": 3, "pear": 2, "plum": 0}

for bad_order in [
    {"apple": 1, "pear": 10},    # not enough pears
    {"apple": 1, "kiwi": 1},     # unknown item
    {"apple": 1, "plum": 1},     # out of stock
    {"apple": -1},               # invalid quantity
]:
    before = dict(stock)
    try:
        fulfill_order(stock, bad_order)
    except ValueError:
        pass
    else:
        raise AssertionError(f"Expected ValueError for {bad_order}")
    assert stock == before, f"Inventory changed after failed order {bad_order}"
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

Imagine the EAFP approach: loop through the order, subtract each item, and raise when one runs out. In the first bad order, what has already happened to the apples by the time you find out there aren't enough pears?

</details>

<details>
<summary>Solution</summary>

<!-- solution:5 -->
```python
def fulfill_order(inventory, order):
    # Check everything first...
    for item, qty in order.items():
        if qty <= 0:
            raise ValueError(f"Quantity for {item!r} must be positive, got {qty}")
        available = inventory.get(item, 0)
        if available < qty:
            raise ValueError(f"Not enough {item!r}: need {qty}, have {available}")

    # ...then change anything.
    for item, qty in order.items():
        inventory[item] -= qty
```

**LBYL.** The operation changes state step by step. If you discover a problem halfway through, earlier items have already been subtracted and the inventory is wrong. Validating everything before touching anything keeps the update all-or-nothing.

</details>

---

## Challenge 6: Validate a Signup Form

**Task:** Write `validate_signup(form)`. `form` is a dict of strings (fields may be missing). Return a dict mapping each **invalid** field name to an error message. Return `{}` if everything is valid.

Rules:

- `username`: required, 3–20 characters, letters and digits only.
- `password`: at least 8 characters and contains at least one digit.
- `age`: a whole number from 13 to 120.

```python
def validate_signup(form):
    ...
```

<!-- tests:6 -->
```python
good = {"username": "ada99", "password": "secret123", "age": "36"}
assert validate_signup(good) == {}

bad = {"username": "a!", "password": "short", "age": "ten"}
assert set(validate_signup(bad)) == {"username", "password", "age"}

assert set(validate_signup({})) == {"username", "password", "age"}
assert set(validate_signup({**good, "age": "7"})) == {"age"}
assert set(validate_signup({**good, "password": "nodigitshere"})) == {"password"}
assert all(isinstance(msg, str) and msg for msg in validate_signup(bad).values())
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

A user submits a form with three mistakes. With one big `try` block, how many of them do they find out about on the first submit? What would the error message say?

</details>

<details>
<summary>Solution</summary>

<!-- solution:6 -->
```python
def validate_signup(form):
    errors = {}

    username = form.get("username", "")
    if not username:
        errors["username"] = "Username is required."
    elif not 3 <= len(username) <= 20:
        errors["username"] = "Username must be 3-20 characters."
    elif not username.isalnum():
        errors["username"] = "Username can only contain letters and digits."

    password = form.get("password", "")
    if len(password) < 8:
        errors["password"] = "Password must be at least 8 characters."
    elif not any(ch.isdigit() for ch in password):
        errors["password"] = "Password must contain at least one digit."

    age = form.get("age", "")
    if not age.isdigit():
        errors["age"] = "Age must be a whole number."
    elif not 13 <= int(age) <= 120:
        errors["age"] = "Age must be between 13 and 120."

    return errors
```

**LBYL.** Validation is about reporting *every* problem with a message a person can act on. An exception stops at the first problem, and its default message (`KeyError: 'age'`) means nothing to a user. Note that `age.isdigit()` is fine here even though Challenge 1 warned against it: negative or decimal ages are invalid anyway, so rejecting them is exactly what we want.

</details>

---

## Challenge 7: Total Size of Anything

**Task:** Write `total_size(items)` that returns the sum of `len()` of every element in `items`.

- It must work with **any** iterable: lists, tuples, sets, dict keys, generators.
- Elements can be anything that has a length: strings, lists, dicts, custom objects.
- If something doesn't work, raise `TypeError` with a helpful message.

```python
def total_size(items):
    ...
```

<!-- tests:7 -->
```python
class Playlist:
    def __init__(self, songs):
        self.songs = songs
    def __len__(self):
        return len(self.songs)

assert total_size(["ab", "c"]) == 3
assert total_size(("ab", [1, 2, 3])) == 5
assert total_size(word for word in ["a", "bb"]) == 3
assert total_size({"one": 1, "three": 3}) == 8       # iterates the keys
assert total_size([Playlist(["x", "y"]), "z"]) == 3
assert total_size([]) == 0

for bad in [[1, 2], 5, None]:
    try:
        total_size(bad)
    except TypeError:
        pass
    else:
        raise AssertionError(f"Expected TypeError for {bad!r}")
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

Try writing the LBYL version with `isinstance(items, (list, tuple))` and `isinstance(item, str)`. Which tests fail? What would you have to add to make them pass, and would you ever be finished?

</details>

<details>
<summary>Solution</summary>

<!-- solution:7 -->
```python
def total_size(items):
    try:
        return sum(len(item) for item in items)
    except TypeError:
        raise TypeError(
            "total_size() needs an iterable of objects that have a length"
        ) from None
```

**EAFP (duck typing).** The function cares what objects can *do* (be iterated, have a length), not what type they are. Type checks would reject the `Playlist` class and generators even though they work perfectly. `from None` hides the original, less helpful traceback.

</details>

---

## Challenge 8: Create a File Without Overwriting

**Task:** Write `create_unique_file(directory, base="report", ext=".txt", content="")`.

- Create `report.txt` in `directory` and write `content` to it.
- If that name is taken, try `report_1.txt`, then `report_2.txt`, and so on.
- Return the `Path` of the file you created.
- It must **never** overwrite an existing file, even if another program is creating files in the same folder at the same moment.

```python
from pathlib import Path

def create_unique_file(directory, base="report", ext=".txt", content=""):
    ...
```

<!-- tests:8 -->
```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as tmp:
    (Path(tmp) / "report_1.txt").write_text("keep me", encoding="utf-8")

    first = create_unique_file(tmp, content="A")
    second = create_unique_file(tmp, content="B")
    third = create_unique_file(tmp, base="log", ext=".csv")

    assert first.name == "report.txt" and first.read_text() == "A"
    assert second.name == "report_2.txt" and second.read_text() == "B"
    assert third.name == "log.csv"
    assert (Path(tmp) / "report_1.txt").read_text() == "keep me"
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

Look up the `"x"` mode for `open()`. What's the difference between "check whether the name is free, then create it" and "create it only if the name is free" as a single step?

</details>

<details>
<summary>Solution</summary>

<!-- solution:8 -->
```python
from pathlib import Path

def create_unique_file(directory, base="report", ext=".txt", content=""):
    directory = Path(directory)
    n = 0
    while True:
        name = f"{base}{ext}" if n == 0 else f"{base}_{n}{ext}"
        path = directory / name
        try:
            with open(path, "x", encoding="utf-8") as f:
                f.write(content)
            return path
        except FileExistsError:
            n += 1
```

**EAFP.** With `if not path.exists(): open(path, "w")`, two programs can both see the name as free and then both write to it, and one overwrites the other. Opening with mode `"x"` asks the operating system to check and create in a single, atomic step, and it raises `FileExistsError` if the name is taken.

</details>

---

## Challenge 9: Average Messy Sensor Readings

**Task:** Write `average_reading(readings)`. `readings` is a list of strings from a sensor log.

- Blank strings and the markers `"N/A"`, `"NA"` and `"-"` mean "no reading". These are **very common**. Skip them.
- Values that look like numbers (whitespace allowed) are readings.
- Anything else is a corrupted value. These are **rare**. Skip them, but count them.
- Return a tuple `(average, corrupted_count)`. The average is `None` if there are no valid readings.

```python
def average_reading(readings):
    ...
```

<!-- tests:9 -->
```python
data = ["10", "", "N/A", "20", " 30 ", "12..3", "-", "NA", ""]
assert average_reading(data) == (20.0, 1)
assert average_reading(["1.5", "2.5"]) == (2.0, 0)
assert average_reading(["", "N/A", "oops"]) == (None, 1)
assert average_reading([]) == (None, 0)
assert average_reading(["-4", "4"]) == (0.0, 0)   # "-4" is a number, "-" alone is a marker
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

There are two kinds of "bad" input here, and the task tells you how often each one happens. Should they be handled the same way?

</details>

<details>
<summary>Solution</summary>

<!-- solution:9 -->
```python
MISSING = {"", "N/A", "NA", "-"}

def average_reading(readings):
    values = []
    corrupted = 0
    for raw in readings:
        text = raw.strip()
        if text in MISSING:          # LBYL: common, expected case
            continue
        try:                         # EAFP: conversion is the validation
            values.append(float(text))
        except ValueError:
            corrupted += 1
    average = sum(values) / len(values) if values else None
    return average, corrupted
```

**Both.** Missing markers are frequent and known in advance, so a plain `if` handles them clearly and cheaply. Corrupted values are rare and unpredictable, and `float()` is the only reliable judge of what counts as a number, so it gets a `try`. The average also uses a small LBYL check (`if values`) instead of catching `ZeroDivisionError`, because "no readings" is a normal outcome.

</details>

---

## Challenge 10: Spot the Bug: The Greedy `try`

This function is supposed to return readings above a threshold. If the config has no `"threshold"`, it should use **100**.

```python
def flag_readings(config, readings):
    try:
        threshold = config["threshold"]
        return [r for r in readings if r["value"] > threshold]
    except KeyError:
        return []
```

**Task:**

1. Find two bugs. (Hint: one is about the default, one is about what the `except` catches.)
2. Rewrite it so a missing threshold uses 100, and a reading that's missing its `"value"` key raises `KeyError` instead of being hidden.

<!-- tests:10 -->
```python
assert flag_readings({"threshold": 10}, [{"value": 5}, {"value": 50}]) == [{"value": 50}]
assert flag_readings({}, [{"value": 150}, {"value": 50}]) == [{"value": 150}]

try:
    flag_readings({"threshold": 10}, [{"value": 5}, {"val": 20}])
except KeyError:
    pass
else:
    raise AssertionError("A malformed reading should raise KeyError")
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

The `except KeyError` is meant to handle *one* missing key. List every line inside the `try` that could raise `KeyError`.

</details>

<details>
<summary>Solution</summary>

<!-- solution:10 -->
```python
def flag_readings(config, readings):
    threshold = config.get("threshold", 100)
    return [r for r in readings if r["value"] > threshold]
```

**The bugs:**

1. A missing threshold returns `[]` instead of using the default of 100.
2. The `try` wraps the list comprehension too. A reading without `"value"` raises `KeyError`, which gets caught and silently turned into "nothing flagged". Real data problems disappear.

**The fix:** `dict.get` with a default handles the expected missing key in one clear line. The comprehension sits outside any `try`, so real errors surface. Rule of thumb: if you can't wrap *only* the line you're worried about, don't use a `try` there.

</details>

---

## Challenge 11: Delete All or Nothing

**Task:** Write `delete_all(paths)`.

- Delete every file in `paths`.
- If **any** of them doesn't exist, delete **none** of them and raise `FileNotFoundError` with a message that lists every missing path.

```python
from pathlib import Path

def delete_all(paths):
    ...
```

<!-- tests:11 -->
```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as tmp:
    a, b, c = (Path(tmp) / name for name in ("a.txt", "b.txt", "c.txt"))
    for p in (a, b):
        p.write_text("data")

    try:
        delete_all([a, b, c])          # c doesn't exist
    except FileNotFoundError as e:
        assert "c.txt" in str(e)
    else:
        raise AssertionError("Expected FileNotFoundError")
    assert a.exists() and b.exists(), "Nothing should be deleted"

    delete_all([a, b])
    assert not a.exists() and not b.exists()
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

Deleting can't be undone. If you just start deleting and handle the error when you reach `c.txt`, where does that leave `a.txt` and `b.txt`?

</details>

<details>
<summary>Solution</summary>

<!-- solution:11 -->
```python
from pathlib import Path

def delete_all(paths):
    paths = [Path(p) for p in paths]
    missing = [str(p) for p in paths if not p.is_file()]
    if missing:
        raise FileNotFoundError(f"Nothing deleted. Missing: {', '.join(missing)}")
    for p in paths:
        p.unlink()
```

**LBYL.** Deletion is irreversible, and the requirement is all-or-nothing. Checking first catches the predictable problems before anything is destroyed. It also lets you report *every* missing file, not only the first one.

**Discussion:** This still has a small race condition. A file could vanish after the check but before `unlink()`. LBYL here prevents the common, predictable failure; it doesn't make the operation truly atomic. Systems that need a real guarantee use extra tools such as moving files into a trash folder first, or database transactions. How would you change the function to handle a file disappearing during the delete loop?

</details>

---

## Challenge 12: Run Optional Plugin Hooks

**Task:** Write `run_start_hooks(plugins)`.

- For each plugin, call its `on_start()` method **if it has one**. Plugins without the method are skipped.
- Return the number of hooks that ran.
- If an `on_start()` method itself raises an error, **including `AttributeError`**, that error must propagate. Don't mistake a bug inside a hook for a missing hook.

```python
def run_start_hooks(plugins):
    ...
```

<!-- tests:12 -->
```python
calls = []

class Logger:
    def on_start(self):
        calls.append("logger")

class Cache:
    pass                           # no hook

class Metrics:
    def on_start(self):
        calls.append("metrics")

class Broken:
    def on_start(self):
        return self.missing_setting   # bug inside the hook -> AttributeError

assert run_start_hooks([Logger(), Cache(), Metrics()]) == 2
assert calls == ["logger", "metrics"]
assert run_start_hooks([]) == 0

try:
    run_start_hooks([Logger(), Broken()])
except AttributeError:
    pass
else:
    raise AssertionError("A bug inside a hook must not be hidden")
print("All tests passed")
```

**Decide:** EAFP, LBYL, or both?

<details>
<summary>Hint</summary>

Write the obvious EAFP version first: `try: plugin.on_start()` / `except AttributeError: continue`. Run the last test. Why does it fail?

</details>

<details>
<summary>Solution</summary>

<!-- solution:12 -->
```python
def run_start_hooks(plugins):
    count = 0
    for plugin in plugins:
        hook = getattr(plugin, "on_start", None)
        if hook is None:
            continue
        hook()
        count += 1
    return count
```

**LBYL (with `getattr`).** The EAFP version catches `AttributeError` from *two* places: looking up the method, and anything that happens *inside* the method. A bug in `Broken.on_start` would look exactly like "this plugin has no hook" and be silently skipped. Looking the method up first separates the two, so only the expected case is handled. This is the same lesson as Challenge 10, in a sneakier form.

</details>

---

## Challenge 13: You Decide: Scenario Questions

No code this time. For each scenario, choose **EAFP**, **LBYL**, or **both**, and write one or two sentences explaining why. Then compare with the answers.

**A.** A script loads a user's saved settings from `~/.myapp/settings.json` on startup. Most users have run the app before, so the file almost always exists.

**B.** A web endpoint receives a JSON body with `amount`, `currency` and `recipient` fields, then charges the user's credit card.

**C.** A function pops items off a queue until it's empty: `while queue: process(queue.pop())`. A teammate suggests rewriting it as an infinite loop that catches `IndexError`.

**D.** A data pipeline reads millions of rows where about 40% have an empty `"discount"` column, and the rest have a number.

**E.** A function receives either a file path (string) or an already-open file object, and needs to read from it.

<details>
<summary>Answers</summary>

**A. EAFP.** Failure is rare, and the file system can change between a check and an open. Catch `FileNotFoundError` (use defaults) and `json.JSONDecodeError` (warn and use defaults).

**B. Both, LBYL first.** Charging a card can't be undone, so validate every field (present, correct type, positive amount, supported currency) and report all problems *before* the charge. Then wrap the payment call itself in a `try` for network or payment-provider errors, since those can't be predicted by checking.

**C. Keep the LBYL version.** An empty queue is the *normal* way the loop ends, not an error. `while queue:` states the intent clearly. (If other threads share the queue, use `queue.Queue`, which is designed for that.)

**D. LBYL for empty values.** At 40%, empty values are a common, expected case. Check `if not row["discount"]` before converting. Use EAFP only for the conversion of non-empty values, where bad data is rare.

**E. Either can work; discuss the trade-off.** LBYL with `isinstance(source, (str, os.PathLike))` is common and clear. Treat anything else as a file object. The EAFP version (`try: source.read()` / `except AttributeError: open(source)`) supports duck typing but risks catching an `AttributeError` from inside a custom `read()` method (see Challenge 12). Many standard library functions take the LBYL approach here.

</details>

---

## Answer Key at a Glance

<details>
<summary>Show the style used in each challenge</summary>

| #  | Style         | Key reason                                              |
|----|---------------|---------------------------------------------------------|
| 1  | Both          | Conversion is the validation; range check is cheap      |
| 2  | EAFP          | Many ways to fail at every level                        |
| 3  | EAFP          | File could vanish between check and use (race)          |
| 4  | Idiom / LBYL  | "Missing key" is common, not exceptional                |
| 5  | LBYL          | Partial updates must not happen                         |
| 6  | LBYL          | Report every problem with clear messages                |
| 7  | EAFP          | Duck typing: care what it does, not what it is          |
| 8  | EAFP          | Atomic create with `"x"` mode avoids a race             |
| 9  | Both          | Common markers vs rare corruption                       |
| 10 | LBYL (`.get`) | `try` was too broad and hid real errors                 |
| 11 | LBYL          | Irreversible, all-or-nothing                            |
| 12 | LBYL (`getattr`) | `except` would also catch bugs inside the hook       |

</details>

## Going Further

- Rewrite any solution in the *opposite* style. Does it still pass the tests? What got worse?
- Time Challenge 4 both ways with `timeit` on a large text. How much slower is catching `KeyError` for every new word?
- Pick a script you've written before and find one `try` that's too broad and one `if` check that has a race condition.
