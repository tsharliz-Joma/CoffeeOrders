const mongoose = require("mongoose");

const CoffeeSchema = new mongoose.Schema({
  coffeeName: {
    type: String,
    required: true,
  },
  coffeeMilk: {
    type: String,
    required: false,
  },
  coffeeSize: {
    type: String,
    required: true,
  },
});

const Coffee = mongoose.model("white_coffee", CoffeeSchema);

module.exports = Coffee;
