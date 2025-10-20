// ## 🔁 **Challenge 3 – Callback Hell (real async chain)**

// ### 🧩 Scenario:

// You have 3 async steps:
// 1️⃣ Login user
// 2️⃣ Fetch their profile
// 3️⃣ Fetch their notifications

function loginUser(callback) {
  setTimeout(() => {
    console.log("✅ User logged in");
    callback({ id: 1, username: "Zeha" });
  }, 1000);
}

function getProfile(user, callback) {
  setTimeout(() => {
    console.log(`📄 Fetched profile for ${user.username}`);
    callback({ ...user, bio: "Building SaaS 🚀" });
  }, 1000);
}

function getNotifications(profile, callback) {
  setTimeout(() => {
    console.log(`🔔 Notifications for ${profile.username}`);
    callback(["New message", "System update"]);
  }, 1000);
}

// now chain them
loginUser((user) => {
  getProfile(user, (profile) => {
    getNotifications(profile, (message) => console.log(message));
  });
});
// ```

// user => {}

// ### 🧠 Your task:

// 1️⃣ Chain all 3 functions using callbacks.
// 2️⃣ Print final notifications.
// 3️⃣ Notice how it gets deeply nested (that’s callback hell).
