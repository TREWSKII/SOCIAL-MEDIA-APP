const User = require("../Models/User");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((usersData) => res.json(usersData))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId }).then((user) =>
      !user
        ? res.status(404).json({ message: "No user with that ID" })
        : res.json(user)
    ) .catch((err) => res.status(500).json(err));
  },
};
