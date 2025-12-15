# ✅ **Real-World Challenge 2 — Implement a Minimal ORM Model Class**

**Used in:** Sequelize, Prisma, Mongoose, Rails-like systems, internal admin tools.

### **Task**

Build a base `Model` class to represent database rows:

```js
class Model {
  static table = ""
  static find(id) {}
  save() {}
}
```

Implement a subclass:

```js
class User extends Model {
  static table = "users"
}

const user = await User.find(1)
user.name = "New name"
await user.save()
```

Requirements:

1. `Model.find(id)` returns a new instance populated with fake/mock data.
2. `save()` prints the JSON that “would” be saved.
3. Must demonstrate:

   * static methods
   * subclass inheritance
   * prototype instance methods

**You’ll use prototypes because:**
ORMs avoid duplicating heavy functions across thousands of model instances.