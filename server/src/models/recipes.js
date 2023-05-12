const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ingredients: [{
    type: String,
    require: true,
  }],
  instructions: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  cooking_time: {
    type: Number,
    require: true
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true
  }
});

module.exports = mongoose.model("recipes", recipeSchema);
