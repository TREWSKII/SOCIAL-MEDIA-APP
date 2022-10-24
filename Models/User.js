const mongoose = require("mongoose");

// ! build schema for user model

const user = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { toJSON: { virtuals: true }, id: false }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
user.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  // Initialize our Post model
  const User = mongoose.model('User', user);
  
  module.exports = User;
  