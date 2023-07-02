import React, { useEffect, useState } from "react";

const YourBMI = ( {bmi, unit}) => {
    const [Header, setHeader] = useState("Welcome!");
    const [IdealWeight, setIdealWeight] = useState("Enter your height and weight and you’ll see your BMI result here.");
    const [IdealWeightUnit, setIdealWeightUnit] = useState(null);

    useEffect(() => {
        if(bmi) {
            setHeader("Your BMI is...");
        } else {
            setHeader("Welcome!");
        }
    }, [bmi])

    useEffect(() => {
        if(unit && unit === 1) {
            setIdealWeightUnit("63.3kgs - 85.2kgs.");
        } else {
            setIdealWeightUnit("9st 6lbs - 12st.10lbs.");
        }
    }, [unit])

    useEffect(() => {
        if(bmi) {
            let healthStatus; 
            if(bmi <= 18.5) {
                healthStatus = "underweight";
            } else if(bmi <= 24.9) {
                healthStatus = "a healthy weight";
            } else if(bmi <= 29.9) {
                healthStatus = "overweight";
            } else {
                healthStatus = "obese";
            }
            setIdealWeight(`Your BMI suggests you’re ${healthStatus}.Your ideal weight is between ${IdealWeightUnit}`)
        } else {
            setIdealWeight("Enter your height and weight and you’ll see your BMI result here.")
        }
    }, [bmi, IdealWeightUnit])

    return ( 
        <div className="your--container">
            <div className="your--bmi">
            <p className="your--header">{Header}</p>
            <p className="BMI--value">{bmi ? bmi.toFixed(1) : null}</p>
            </div>
            <p className="ideal--weight">{IdealWeight}</p>
        </div>
     );
}
 
export default YourBMI;