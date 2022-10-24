const mongoose = require("mongoose");
const reaction = require("./Reaction");
// ! build schema for thought model

const thought = new mongoose.Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toLocaleString(),
  },
  username: { type: String, required: true },
  reactions: [reaction],
},
{toJSON: { virtuals: true, getters: true},  id: false}
);

// not in reactions
thought.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

// not in reaction going to stay a schema 
const Thought = model('Thought', thought);

module.exports = Thought;