import React from "react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { disabled } from "express/lib/application";


const Order = () => {

    const [ employeeName, setEmployeeName ] = useState("");

    const [ coffeeName, setCoffeeName ] = useState("");
    const [ coffeeSize, setCoffeeSize ] = useState("");
    const [ coffeeMilk, setCoffeeMilk ] = useState("");
    const [ numberOfCoffee, setNumberOfCofee ] = useState(0)

    const navigate = useNavigate();

    const handleName = (e) => {
        setEmployeeName(e.target.value)
        console.log(e.target.value)
    }

    const handleSizeSelect = (e) => {
        setCoffeeSize(e.target.value)
        console.log(e.target.value)
    };

    const handleMilkSelect = (e) => {
        setCoffeeMilk(e.target.value)
        console.log(e.target.value)
    };

    const handleCoffeeSelect = (e) => {
        setCoffeeName(e.target.value)
        console.log(e.target.value)
    }

    const handleSelect = (e) => {

        // switch(e.target.id){
        //     case "oneSelected":
        //         console.log("1")
        //         break;
        //     case "twoSelected":
        //         console.log("2")
        //         break;
        //     case "threeSelected":
        //         console.log("3")
        //         break;
        //     case "fourSelected":
        //         console.log("4") 
        //         break;
        //     default:
        //         console.log("0")
        // };

    }



    return(
        <div className="create-order-div">
            <h1>Order Coffee Here</h1>
            
            <form>

                <div>
                <div className="input-box">
                    <label htmlFor="input-box">Name: 
                        <input onChange={handleName}
                        id="name" type="text"
                        placeholder="Enter Your Name"
                        />
                    </label>
                </div>
                    <div className="input-box">
                        <label htmlFor="coffeeName" className="details">Standard Coffee: 
                            <select value={coffeeSize} onChange={handleCoffeeSelect}>
                                <option value={"Latte"}>Latte</option>
                                <option>Flat White</option>
                                <option>Cappuccino</option>
                                <option>Long Black</option>
                                <option>Short Macchiato</option>
                                <option>Long Macchiato</option>
                                <option>Espresso</option>
                                <option>Double Espresso</option>
                            </select>
                        </label>
                    </div>
                    <div className="input-box">
                        <label htmlFor="coffeeMilk" className="details">Milk of Choice:
                            <select value={coffeeMilk} onChange={handleMilkSelect}>
                                <option value="Full Cream">Full Cream</option>
                                <option value="Skim Milk">Skim Milk</option>
                                <option value="Soy Milk">Soy Milk</option>
                                <option value="Almond Milk">Almond Milk</option>
                                <option value="Oat Milk">Oat Milk</option>
                            </select>
                        </label>
                    </div>
                    <div className="input-box">
                        <label htmlFor="coffeeSize" className="details"> Size: 
                            <select value={coffeeSize} onChange={handleSizeSelect}>
                                <option value="Mug">Mug</option>
                                <option value="Cup">Cup</option>
                            </select>
                        </label>
                    </div>
                    <div className="numberOf">
                        <div className="form-check form-check-inline">
                            <label htmlFor="oneSelected" className="details">+ 1
                                <input onChange={handleSelect} type={"checkbox"} className={"form-check-input"} id={"oneSelected"} /> 
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label htmlFor="twoSelected" className="details">+ 2
                                <input onChange={handleSelect} type={"checkbox"} className={"form-check-input"} id={"twoSelected"} /> 
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label htmlFor="threeSelected" className="details">+ 3
                                <input onChange={handleSelect} type={"checkbox"} className={"form-check-input"} id={"threeSelected"} /> 
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label htmlFor="fourSelected" className="details">+ 4
                                <input onChange={handleSelect} type={"checkbox"} className={"form-check-input"} id={"fourSelected"} /> 
                            </label>
                        </div>
                        <div className="input-box">
                            <label htmlFor="Note" className="details">Special requests: 
                                <input />
                            </label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-success">Place order</button>
            </form>
        <hr></hr>
        <button className="btn btn-outline-secondary">Previous Orders</button>

        <Link to="/" className="btn btn-color-success">Home</Link>
        </div>
        
    )
};

export default Order