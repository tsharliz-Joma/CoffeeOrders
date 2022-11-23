const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const WhiteCoffeeModel = require("./models/Coffee")
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://charlesJprince:charlesjoma2@cluster0.nv1odnc.mongodb.net/coffee_orders?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }
);
const db = mongoose.connection
db.on('error', err => {
    console.log('error connecting to server', err)
    process.exit(1)
})

app.get("/", async (req, res) => {
    const coffee = new WhiteCoffeeModel({ coffeeName: "Flat White", coffeeMilk: "Oat", coffeeSize: "Large" })
    res.json(coffee)
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});