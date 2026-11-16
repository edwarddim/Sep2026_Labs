# Async Showdown: Fix the QuickBite App

A 20-minute team competition on Promises, `async/await`, `Promise.all` and `Promise.allSettled`.

| | |
|---|---|
| **Audience** | Grads who have learned callbacks, promises and async/await |
| **Format** | 6 groups, 3 rounds + 1 tie-breaker |
| **Needs** | One laptop per group with Node.js 18+ (or any browser console) |
| **File** | Each group gets `quickbite.js` (the starter code below) |

---

## The story

You have just joined **QuickBite**, a food delivery startup. The previous developer left in a hurry and the code is a mess. The app works (mostly), but it is slow, hard to read, and one failing service takes the whole screen down.

Your team has 20 minutes to clean it up. Three screens, three problems, one tie-breaker.

## Rules

1. Do not edit anything in the "FAKE QUICKBITE SERVER" section.
2. The output must stay the same as the original unless the round says otherwise.
3. When you finish a round, shout **"Order up!"** The facilitator checks your output and code.
4. The facilitator may ask **any** team member to explain the fix, so make sure the whole group understands it.

## Scoring

| What | Points |
|---|---|
| Round solved correctly | 10 |
| First group to solve the round | +3 |
| Second group to solve the round | +2 |
| Randomly picked member explains the fix well | +2 |
| Round 1 hidden bonus | +2 |
| Tie-breaker solved | 5 |

Maximum per group: 52 points.

---

## Starter code: `quickbite.js`

Run it with `node quickbite.js`. At the bottom of the file, uncomment the round you are working on.

```js
// =====================================================
//  FAKE QUICKBITE SERVER  (DO NOT EDIT THIS SECTION)
// =====================================================
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Old-style callback API (written years ago)
function getUser(userId, callback) {
  setTimeout(() => {
    if (userId !== 101) {
      callback(new Error("User not found"));
      return;
    }
    callback(null, { id: 101, name: "Priya", lastOrderId: 5001 });
  }, 500);
}

// Newer APIs: these already return promises
function getOrder(orderId) {
  return delay(500).then(() => ({
    id: orderId, item: "Paneer Biryani", restaurantId: 77, riderId: 9,
  }));
}
function getRestaurant(restaurantId) {
  return delay(500).then(() => ({ id: restaurantId, name: "Spice Villa" }));
}
function getRider(riderId) {
  return delay(500).then(() => ({ id: riderId, name: "Arjun", etaMinutes: 12 }));
}

function getNearbyRestaurants() {
  return delay(1000).then(() => ["Spice Villa", "Dosa Corner", "Pizza Hub"]);
}
function getOffers() {
  return delay(1000).then(() => ["50% off up to Rs.100", "Free delivery"]);
}
function getCart() {
  return delay(1000).then(() => ({ items: 2, total: 380 }));
}

function getOrderHistory() {
  return delay(400).then(() => ({ count: 12 }));
}
function getRecommendations() {
  return delay(600).then(() => {
    throw new Error("Recommendation service is down");
  });
}
function getWalletBalance() {
  return delay(500).then(() => ({ balance: 450 }));
}

function notifyRider(name) {
  return delay(300).then(() => console.log(`Notified ${name}`));
}

// =====================================================
//  ROUND 1: Untangle the pyramid
// =====================================================
function trackOrder(userId) {
  getUser(userId, function (err, user) {
    if (err) {
      console.log("Could not track order: " + err.message);
    } else {
      getOrder(user.lastOrderId).then(function (order) {
        getRestaurant(order.restaurantId).then(function (restaurant) {
          getRider(order.riderId).then(function (rider) {
            console.log(
              `Hi ${user.name}! Your ${order.item} from ${restaurant.name} ` +
              `is on the way with ${rider.name}. ETA: ${rider.etaMinutes} mins`
            );
          }).catch(function (err) {
            console.log("Could not track order: " + err.message);
          });
        }).catch(function (err) {
          console.log("Could not track order: " + err.message);
        });
      }).catch(function (err) {
        console.log("Could not track order: " + err.message);
      });
    }
  });
}

// =====================================================
//  ROUND 2: The slow home page
// =====================================================
async function loadHomePage() {
  console.time("Home page loaded in");

  const restaurants = await getNearbyRestaurants();
  const offers = await getOffers();
  const cart = await getCart();

  console.log("Restaurants:", restaurants.join(", "));
  console.log("Offers:", offers.join(" | "));
  console.log(`Cart: ${cart.items} items, Rs.${cart.total}`);

  console.timeEnd("Home page loaded in");
}

// =====================================================
//  ROUND 3: One failure kills everything
// =====================================================
async function loadProfilePage() {
  try {
    const [history, recommendations, wallet] = await Promise.all([
      getOrderHistory(),
      getRecommendations(),
      getWalletBalance(),
    ]);
    console.log(`Orders: ${history.count} past orders`);
    console.log(`Recommended: ${recommendations.join(", ")}`);
    console.log(`Wallet: Rs.${wallet.balance}`);
  } catch (err) {
    console.log("Something went wrong: " + err.message);
  }
}

// =====================================================
//  TIE-BREAKER: The lying success message
// =====================================================
async function notifyAllRiders() {
  const riders = ["Arjun", "Meera", "Kabir"];

  riders.forEach(async (rider) => {
    await notifyRider(rider);
  });

  console.log("All riders notified");
}

// =====================================================
//  RUN: uncomment the round you are working on
// =====================================================
// trackOrder(101);
// trackOrder(999);
// loadHomePage();
// loadProfilePage();
// notifyAllRiders();
```

---

## Round 1: Untangle the pyramid (6 min)

**Screen:** Order tracking. To show the tracking message, the app needs the user, then the user's last order, then the restaurant and rider for that order.

**Problem:** `trackOrder` mixes an old callback API with nested `.then()` calls, and the same error handling is copy-pasted four times.

**Your tasks**

1. Write `getUserAsync(userId)` that wraps the callback-based `getUser` and returns a Promise. Do not change `getUser` itself.
2. Rewrite `trackOrder` as an `async` function using `await`. No nesting, no `.then()`.
3. Handle errors in **one** place.

**Check yourself**

- `trackOrder(101)` prints:
  `Hi Priya! Your Paneer Biryani from Spice Villa is on the way with Arjun. ETA: 12 mins`
- `trackOrder(999)` prints:
  `Could not track order: User not found`

---

## Round 2: The slow home page (4 min)

**Screen:** Home page. It shows nearby restaurants, current offers and the cart.

**Problem:** Users complain the home page takes 3 seconds to load. Each API takes 1 second, and none of them needs the result of another.

**Your tasks**

1. Make `loadHomePage` finish in about 1 second instead of 3.
2. The printed output must stay exactly the same (apart from the time).

**Check yourself**

- `Home page loaded in` shows roughly 1000 ms, not 3000 ms.

**Think about it:** in Round 1 you awaited one call after another. Why is that wrong here but right there?

---

## Round 3: One failure kills everything (5 min)

**Screen:** Profile page. It shows order history, recommendations and wallet balance.

**Problem:** The recommendation service is down today. Because of that one failure the user sees only `Something went wrong`, even though order history and wallet loaded fine.

**Your tasks**

1. Still load all three in parallel.
2. Show every section that loaded successfully.
3. For a section that failed, print a friendly line with the reason instead of crashing the page.
4. Your code must keep working if a different service fails tomorrow. Do not hard-code "recommendations failed".

**Check yourself:** the output should be

```
Orders: 12 past orders
Recommendations unavailable (Recommendation service is down)
Wallet: Rs.450
```

---

## Tie-breaker: The lying success message (3 min)

**Screen:** Admin panel. A button notifies all riders about a surge in orders.

**Problem:** Run `notifyAllRiders()`. It prints `All riders notified` **before** any rider is actually notified.

**Your tasks**

1. Explain in one sentence why this happens.
2. Fix it so `All riders notified` is printed only after all three riders are notified.

---

## Debrief questions (if time allows)

1. When do you need to wrap something in `new Promise`, and when is that unnecessary?
2. How do you decide between awaiting one by one and `Promise.all`?
3. What is the difference between what `Promise.all` and `Promise.allSettled` give you back?
4. Why does `forEach` not wait for an `async` callback?

---
---

# Solutions (facilitator only)

## Round 1 solution

```js
function getUserAsync(userId) {
  return new Promise((resolve, reject) => {
    getUser(userId, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

async function trackOrder(userId) {
  try {
    const user = await getUserAsync(userId);
    const order = await getOrder(user.lastOrderId);
    const restaurant = await getRestaurant(order.restaurantId);
    const rider = await getRider(order.riderId);

    console.log(
      `Hi ${user.name}! Your ${order.item} from ${restaurant.name} ` +
      `is on the way with ${rider.name}. ETA: ${rider.etaMinutes} mins`
    );
  } catch (err) {
    console.log("Could not track order: " + err.message);
  }
}
```

**What to look for**

- `getUserAsync` calls `reject(err)` on error and `resolve(user)` on success. A common mistake is forgetting the `else`/`return`, or resolving with the error.
- A single `try/catch` replaces four copies of the error handler.
- The calls are sequential because each one needs data from the previous one: the order needs `user.lastOrderId`, the restaurant needs `order.restaurantId`.

**Hidden bonus (+2):** `getRestaurant` and `getRider` both depend on the order but not on each other, so they can run in parallel. A group that spots this gets the bonus:

```js
const [restaurant, rider] = await Promise.all([
  getRestaurant(order.restaurantId),
  getRider(order.riderId),
]);
```

## Round 2 solution

```js
async function loadHomePage() {
  console.time("Home page loaded in");

  const [restaurants, offers, cart] = await Promise.all([
    getNearbyRestaurants(),
    getOffers(),
    getCart(),
  ]);

  console.log("Restaurants:", restaurants.join(", "));
  console.log("Offers:", offers.join(" | "));
  console.log(`Cart: ${cart.items} items, Rs.${cart.total}`);

  console.timeEnd("Home page loaded in");
}
```

**What to look for**

- All three calls are started before anything is awaited, so the total time is the slowest call (about 1 s), not the sum (3 s).
- Results come back in the same order as the input array, whichever call finishes first.
- Common mistake: `await Promise.all([await getNearbyRestaurants(), await getOffers(), await getCart()])`. The inner `await`s make it sequential again, so it still takes 3 s.
- Answer to "Think about it": Round 1 calls depend on each other's results; these three do not.

## Round 3 solution

```js
async function loadProfilePage() {
  const [history, recommendations, wallet] = await Promise.allSettled([
    getOrderHistory(),
    getRecommendations(),
    getWalletBalance(),
  ]);

  if (history.status === "fulfilled") {
    console.log(`Orders: ${history.value.count} past orders`);
  } else {
    console.log(`Order history unavailable (${history.reason.message})`);
  }

  if (recommendations.status === "fulfilled") {
    console.log(`Recommended: ${recommendations.value.join(", ")}`);
  } else {
    console.log(`Recommendations unavailable (${recommendations.reason.message})`);
  }

  if (wallet.status === "fulfilled") {
    console.log(`Wallet: Rs.${wallet.value.balance}`);
  } else {
    console.log(`Wallet unavailable (${wallet.reason.message})`);
  }
}
```

**What to look for**

- `Promise.allSettled` never rejects, so the `try/catch` around it is no longer needed.
- Each result is an object: `{ status: "fulfilled", value }` or `{ status: "rejected", reason }`. Common mistake: using `history.count` instead of `history.value.count`.
- Every section has a fallback, not just recommendations (task 4).
- Rule of thumb for the debrief: use `Promise.all` when you need **all** results or none (for example, payment + stock check before placing an order). Use `Promise.allSettled` when each result is useful on its own (for example, independent page sections).

## Tie-breaker solution

**Why it happens:** `forEach` ignores the promise returned by each `async` callback, so it starts all three notifications and returns immediately; nothing waits for them.

Parallel fix (preferred here, the riders are independent):

```js
async function notifyAllRiders() {
  const riders = ["Arjun", "Meera", "Kabir"];

  await Promise.all(riders.map((rider) => notifyRider(rider)));

  console.log("All riders notified");
}
```

Sequential fix (also accepted):

```js
async function notifyAllRiders() {
  const riders = ["Arjun", "Meera", "Kabir"];

  for (const rider of riders) {
    await notifyRider(rider);
  }

  console.log("All riders notified");
}
```
