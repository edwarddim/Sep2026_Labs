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
