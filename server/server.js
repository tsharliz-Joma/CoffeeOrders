const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const WhiteCoffeeModel = require("./models/Coffee")


app.use(express.json());

mongoose.connect("mongodb+srv://charlesJprince:charlesjoma2@cluster0.nv1odnc.mongodb.net/coffee_orders?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true
    }
);

app.get("/", async(req, res) => {
    const coffee = new WhiteCoffeeModel({ coffeeName: "Flat White", coffeeMilk: "Oat", coffeeSize: "Large"})

    try {
        await coffee.save();
    }catch(error){
        console.log(error)
    }
})

app.listen(3001, () => {
    console.log("Server running on Port 3001")
});

