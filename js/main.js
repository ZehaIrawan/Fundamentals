// ```js
// class Model {
//   static table = ""
//   static find(id) {}
//   save() {}
// }
// ```

// Implement a subclass:

// ```js
// class User extends Model {
//   static table = "users"
// }

// const user = await User.find(1)
// user.name = "New name"
// await user.save()
// ```

// Requirements:

// 1. `Model.find(id)` returns a new instance populated with fake/mock data.
// 2. `save()` prints the JSON that “would” be saved.
// 3. Must demonstrate:
//    * static methods
//    * subclass inheritance
//    * prototype instance methods

class Model {
  static find(id) {
    return {
      userId: id,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };
  }

  save() {}
}

class User extends Model {}

const user = User.find(1);
console.log(user,'user')
// user.name = "New name"
// await user.save()
