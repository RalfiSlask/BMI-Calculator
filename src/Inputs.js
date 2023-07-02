
import React, { useState, useEffect } from "react";

const Metrics = ( {getMetricBmi} ) => {
    const [Height, setHeight] = useState(null);
    const [Weight, setWeight] = useState(null);

    // Metric equation: BMI = kg/m2

    const handleHeightInput = (event) => {
        event.target.value = event.target.value.slice(0, 3);
        setHeight( (event.target.value / 100) * (event.target.value / 100) );
    };

    const handleWeightInput = (event) => {
        event.target.value = event.target.value.slice(0, 3);
        setWeight(event.target.value);
    };

    useEffect(() => {
        if(Height && Weight) {
            getMetricBmi(Height, Weight)
        } else {
            getMetricBmi(null)
        }
    }, [Height, Weight, getMetricBmi])

    return (
        <>
        <form className="metric--form">
            <label>Height</label>
            <input type ="number" onInput = {handleHeightInput} placeholder="0" min="1"></input>
            <p className ="unit">cm</p>
        </form>
        <form className="metric--form">
            <label>Weight</label>
            <input type ="number" onInput = {handleWeightInput} placeholder="0" min="1"></input>
            <p className ="unit">kg</p>
        </form>
        </>
    )
};

const Imperial= ( {getImperialBMI} ) => {
    const [Feet, setFeet] = useState(null);
    const [Inches, setInches] = useState(null);
    const [Stones, setStones] = useState(null);
    const [Pounds, setPounds] = useState(null);

    // Imperial equation: BMI = 703 * pounds/(inches)2

    const handleHeightFeet = (event) => {
        event.target.value = event.target.value.slice(0, 1);
        setFeet(event.target.value);
    };
    const handleHeightInches = (event) => {
        event.target.value = event.target.value.slice(0, 3);
        setInches(event.target.value)
    };
    const handleWeightStones = (event) => {
        event.target.value = event.target.value.slice(0, 2);
        setStones(event.target.value)
    };
    const handleWeightPounds = (event) => {
        event.target.value = event.target.value.slice(0, 3);
        setPounds(event.target.value)
    };

    useEffect(() => {
        if(Feet && Stones) {
            let feetInInches = Feet * 12;
            let height = feetInInches + Number(Inches);
            let stonesInPounds = Stones * 14;
            let weight = stonesInPounds + Number(Pounds);
            getImperialBMI(height, weight)
        }
    }, [Feet, Stones, Inches, Pounds, getImperialBMI]);

    return (
        <>
        <label>Height</label>
        <form className="imperial--form">
            <input type ="number" placeholder="0" min="1" onInput={handleHeightFeet}></input>
            <p className="unit unit--big">ft</p>
            <input type ="number" placeholder="0" min="1" onInput={handleHeightInches}></input>
            <p className="unit unit--smaller">in</p>
        </form>
        <label>Weight</label>
        <form className="imperial--form">
            <input type ="number" placeholder="0" min="1" onInput={handleWeightStones}></input>
            <p className="unit unit--big">st</p>
            <input type ="number" placeholder="0" min="1" onInput={handleWeightPounds}></input>
            <p className="unit unit--smaller">lbs</p>
        </form>
        </>
    )
}

const Inputs = ( {unit, getMetricBmi, getImperialBMI} ) => {

    return ( 
        <div className = "forms--container">
            {unit === 1 ? 
            <div className="metric--container">
                <Metrics getMetricBmi = {getMetricBmi}/>
            </div> : 
            <div className="imperial--container">
                <Imperial getImperialBMI = {getImperialBMI}/>
            </div>
                }
        </div>
     )
};
 
export default Inputs;