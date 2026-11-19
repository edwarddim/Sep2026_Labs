// A REAL SQL injection, against a REAL database (SQLite, in-memory - no
// server needed to run this). Not a simulation - the vulnerable query
// below actually returns data it shouldn't.

import Database from "better-sqlite3";

const db = new Database(":memory:");
db.exec(`
  CREATE TABLE users (
    username TEXT PRIMARY KEY,
    password TEXT
  )
`);
db.prepare("INSERT INTO users VALUES (?, ?)").run("alice", "mission123");
db.prepare("INSERT INTO users VALUES (?, ?)").run("bob", "wrongpermissions");

// --- VULNERABLE: building SQL with string concatenation ---
function findUserUnsafe(username) {
  const sql = `SELECT * FROM users WHERE username = '${username}'`;
  console.log("Executing:", sql);
  return db.prepare(sql).all();
}

console.log("--- Normal lookup ---");
console.log(findUserUnsafe("alice"));

console.log("\n--- A malicious username ---");
// This isn't a fake example string - it's a REAL SQL injection payload
// that closes the quote early and adds a condition that's always true.
const maliciousInput = "x' OR '1'='1";
console.log(findUserUnsafe(maliciousInput));

// --- SAFE: a parameterized query ---
function findUserSafe(username) {
  return db.prepare("SELECT * FROM users WHERE username = ?").all(username);
}

console.log("\n--- The same malicious input, against the SAFE version ---");
console.log(findUserSafe(maliciousInput));