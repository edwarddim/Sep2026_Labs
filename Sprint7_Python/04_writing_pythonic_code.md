# Writing Pythonic Code

Python conventions, PEP 8, docstrings (PEP 257), and the idioms that make code Pythonic.

## Table of Contents

1. [The Zen of Python (PEP 20)](#1-the-zen-of-python-pep-20)
2. [What Is a PEP?](#2-what-is-a-pep)
3. [PEP 8: The Style Guide](#3-pep-8-the-style-guide)
4. [Docstrings (PEP 257)](#4-docstrings-pep-257)
5. [Pythonic Idioms: Before and After](#5-pythonic-idioms-before-and-after)
6. [Other Good Practices](#6-other-good-practices)
7. [Tools That Enforce Conventions](#7-tools-that-enforce-conventions)

---

"Pythonic" code uses the language's own idioms instead of patterns carried over from other languages. It's usually shorter, easier to read, and easier for other Python developers to maintain.

## 1. The Zen of Python (PEP 20)

Run `import this` in a Python shell to see the 19 guiding principles of Python's design. A few that matter most day to day:

- **Readability counts.** Code is read far more often than it is written.
- **Explicit is better than implicit.** Don't hide behavior behind clever tricks.
- **Simple is better than complex.** Reach for the straightforward solution first.
- **Flat is better than nested.** Avoid deeply nested `if`/`for` blocks.
- **Errors should never pass silently.** Don't swallow exceptions without a reason.
- **There should be one obvious way to do it.** Prefer the common idiom over a novel one.

## 2. What Is a PEP?

A **PEP** (Python Enhancement Proposal) is a design document for the Python community. PEPs propose new language features, describe processes, or set conventions. They are published at [peps.python.org](https://peps.python.org).

PEPs worth knowing:

| PEP     | Topic                                     |
|---------|-------------------------------------------|
| PEP 8   | Style guide for Python code               |
| PEP 20  | The Zen of Python                         |
| PEP 257 | Docstring conventions                     |
| PEP 484 | Type hints                                |
| PEP 498 | f-strings                                 |
| PEP 572 | Assignment expressions (`:=`, "walrus")   |
| PEP 634 | Structural pattern matching (`match`)     |

## 3. PEP 8: The Style Guide

PEP 8 is the standard style guide for Python. Most teams follow it, often enforced by tools.

**Naming conventions**

| Thing                  | Convention              | Example                  |
|------------------------|-------------------------|--------------------------|
| Variables, functions   | `snake_case`            | `total_count`, `load_data()` |
| Classes                | `PascalCase`            | `DataLoader`             |
| Constants              | `UPPER_SNAKE_CASE`      | `MAX_RETRIES = 3`        |
| Modules / files        | short `snake_case`      | `file_utils.py`          |
| "Internal" names       | leading underscore      | `_helper()`, `self._cache` |
| Name-mangled attribute | double leading underscore | `self.__secret`        |
| Avoid keyword clashes  | trailing underscore     | `class_`, `type_`        |

**Layout**

- Indent with **4 spaces**, never tabs.
- Limit lines to **79 characters** (many teams use 88 or 100 with a formatter like Black).
- Two blank lines between top-level functions and classes; one blank line between methods.
- Put imports at the top, grouped in this order with a blank line between groups: standard library, third-party, local.

```python
import os
import sys

import requests

from myproject.utils import load_config
```

**Whitespace**

```python
# Good
x = 1
result = func(a, b)
items[1:3]
def greet(name="World"): ...

# Avoid
x=1
result = func( a , b )
def greet(name = "World"): ...
```

**Comparisons**

```python
if value is None:          # use `is` for None, not ==
if not items:              # empty check, not len(items) == 0
if is_ready:               # not `if is_ready == True`
if isinstance(x, int):     # not `type(x) == int`
```

## 4. Docstrings (PEP 257)

A docstring is a string literal that is the first statement in a module, function, class, or method. Unlike a `#` comment, it's stored on the object and shown by `help()` and IDEs.

```python
def area(radius):
    """Return the area of a circle with the given radius."""
    return 3.14159 * radius ** 2

help(area)
print(area.__doc__)
```

**PEP 257 basics**

- Always use triple double quotes: `"""..."""`.
- A one-line docstring fits on one line, including the closing quotes.
- A multi-line docstring has a summary line, a blank line, then more detail.
- Write the summary as a command ("Return the total"), not a description ("Returns the total").
- Document what the code does and how to use it, not how it works internally.

**Multi-line docstrings: common styles**

PEP 257 doesn't set a format for describing parameters, so teams usually pick one of these.

*Google style* (easy to read, widely used):

```python
def fetch_users(limit, active_only=True):
    """Fetch users from the database.

    Args:
        limit (int): Maximum number of users to return.
        active_only (bool): If True, skip deactivated accounts.

    Returns:
        list[dict]: One dict per user with "id" and "name" keys.

    Raises:
        ValueError: If limit is negative.
    """
```

*NumPy style* (common in scientific code):

```python
def normalize(values):
    """Scale values to the range [0, 1].

    Parameters
    ----------
    values : list of float
        The numbers to scale.

    Returns
    -------
    list of float
        The scaled values.
    """
```

*reStructuredText / Sphinx style*:

```python
def connect(host, port):
    """Open a connection to a server.

    :param host: Server hostname.
    :param port: Server port number.
    :return: An open connection object.
    """
```

**Module and class docstrings**

```python
"""Utilities for loading and cleaning employee CSV data."""

class Employee:
    """A single employee record.

    Attributes:
        name: Full name of the employee.
        salary: Annual salary in USD.
    """
```

**Comments vs docstrings**

- Docstrings explain *what* and *how to use it*.
- `#` comments explain *why* a piece of code does something non-obvious.
- Don't comment the obvious (`x += 1  # add one to x`).

## 5. Pythonic Idioms: Before and After

**Loop over items directly, not indexes**

```python
# Not Pythonic
for i in range(len(names)):
    print(names[i])

# Pythonic
for name in names:
    print(name)

# Need the index too? Use enumerate
for i, name in enumerate(names, start=1):
    print(i, name)
```

**Loop over two lists together with `zip`**

```python
for name, score in zip(names, scores):
    print(f"{name}: {score}")
```

**Use comprehensions for simple transforms**

```python
# Not Pythonic
squares = []
for n in numbers:
    squares.append(n * n)

# Pythonic
squares = [n * n for n in numbers]
```

> Keep comprehensions simple. If one needs nested loops plus conditions, a regular loop is usually more readable.

**Unpack values**

```python
first, second = pair
a, b = b, a                     # swap without a temp variable
head, *rest = [1, 2, 3, 4]      # head=1, rest=[2, 3, 4]
```

**Use `with` for resources**

```python
# Not Pythonic
f = open("data.txt")
data = f.read()
f.close()

# Pythonic
with open("data.txt") as f:
    data = f.read()
```

**Use `dict.get` and `defaultdict`**

```python
# Not Pythonic
if key in counts:
    counts[key] += 1
else:
    counts[key] = 1

# Pythonic
counts[key] = counts.get(key, 0) + 1

# Or
from collections import Counter
counts = Counter(words)
```

**Join strings, don't concatenate in a loop**

```python
# Not Pythonic
result = ""
for word in words:
    result += word + ", "

# Pythonic
result = ", ".join(words)
```

**Use built-ins**

```python
total = sum(prices)
largest = max(scores)
has_negative = any(n < 0 for n in numbers)
all_valid = all(item.is_valid() for item in items)
```

**EAFP over LBYL** (covered in depth in [eafp_vs_lbyl.md](eafp_vs_lbyl.md))

Python tends to favor "Easier to Ask Forgiveness than Permission" (try it and handle the error) over "Look Before You Leap" (check everything first).

```python
# LBYL
if "email" in user and user["email"] is not None:
    send(user["email"])

# EAFP
try:
    send(user["email"])
except KeyError:
    log("No email on file")
```

**Return early to stay flat**

```python
# Deeply nested
def process(order):
    if order:
        if order.is_paid:
            if order.items:
                ship(order)

# Flat with guard clauses
def process(order):
    if not order or not order.is_paid or not order.items:
        return
    ship(order)
```

**Use f-strings for formatting**

```python
# Old
"Hello, " + name + "! You are " + str(age) + "."
"Hello, %s! You are %d." % (name, age)

# Pythonic
f"Hello, {name}! You are {age}."
```

## 6. Other Good Practices

- **Use type hints** for function signatures in anything shared or long-lived.
- **Keep functions small** and focused on one job.
- **Don't use bare `except:`**. Catch specific exceptions, or at least `except Exception:`.
- **Avoid mutable default arguments** (see "Functions" in [01_python_basics.md](01_python_basics.md)).
- **Use `pathlib`** over string manipulation for file paths.
- **Use `if __name__ == "__main__":`** so modules can be imported without side effects.
- **Use virtual environments** (`python -m venv .venv`) to keep each project's dependencies separate.

## 7. Tools That Enforce Conventions

| Tool       | What it does                                              |
|------------|-----------------------------------------------------------|
| **Black**  | Auto-formats code to a consistent style                   |
| **Ruff**   | Very fast linter and formatter; covers most PEP 8 checks  |
| **Flake8** | Linter for PEP 8 style and common errors                  |
| **isort**  | Sorts and groups imports                                  |
| **mypy**   | Static type checker for type hints                        |
| **pydocstyle** | Checks docstrings against PEP 257                     |

```bash
pip install black ruff mypy
black .           # format everything
ruff check .      # lint
mypy my_module.py # type-check
```

Running a formatter and linter automatically (in your editor, a pre-commit hook, or CI) means you rarely have to think about style by hand.

---

## Practice Ideas

1. Take an older script of yours and run `ruff check` and `black` on it. Fix what they flag.
2. Add Google-style docstrings to every function in one of your modules.

## Related Guides

- [Python Basics / Intermediates](01_python_basics.md)
- [Python OS and I/O](02_python_os_and_io.md)
- [Parsing Through CSV Files](03_parsing_csv_files.md)
