import React, { useState } from "react";
import Inputs from "./Inputs";
import YourBMI from "./YourBMI";


const ChooseSystemOfUnits = ( {onClick} ) => {
    const [ButtonActive, setButtonActive] = useState(1);
    
    // an array of the buttonData as objects

    const buttons = [
        {id: 1, text: "Metric"},
        {id: 2, text: "Imperial"}
    ]

    const handleButtonClick = (buttonId) => {
        setButtonActive(buttonId)
        onClick(buttonId)
    };
    
    return (
        <div className = "units--panel">
        {buttons.map(button => (
            <React.Fragment key={button.id}>
            <div className="unit--wrapper">
            <button key = {button.id} onClick = {() => {handleButtonClick(button.id)}}>
                {ButtonActive === button.id ? <div className="active"></div> : null}
            </button>
            <p>{button.text}</p>
            </div>
            </React.Fragment>
        )
        )}
        </div>
    )
};

const Details = () => {
    const [unit, setUnit] = useState(1);
    const [BMI, setBMI] = useState(null);
    const getUnitType = (buttonId) => {
        setUnit(buttonId)
    };

const getMetricBmi = (height, weight) => {
    setBMI(weight / height)
};

const getImperialBMI = (height, weight) => {
    setBMI((weight/((height) * (height))) * 703);
}

    return (
        <>
        <div className= "details--container">
            <h2 className = "details--header">Enter your details below</h2>
            <ChooseSystemOfUnits onClick = {getUnitType}/>
            <Inputs unit = {unit} getMetricBmi = {getMetricBmi} getImperialBMI = {getImperialBMI}/>
            <YourBMI bmi = {BMI} unit = {unit}/>
        </div>
        </>
      );
}
 
export default Details;