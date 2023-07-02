import logo from "./assets/images/logo.svg"

const BodyMass = () => {
    return (
        <div className = "BMI--container">
            <img src={logo} alt="main-logo" className="logo--main"></img>
            <h1>Body Mass <br/>Index Calculator</h1>
            <p className="info">Better understand your weight in relation to your height using our body mass index 
                (BM) calculator. While BMI is not the sole determinant of a healthy weight, 
                it offers a valuable starting point to evaluate your overall health and well-being.</p>
        </div>
    )
};

export default BodyMass;