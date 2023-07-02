import logoGender from "../assets/images/icon-gender.svg";
import logoAge from "../assets/images/icon-age.svg";
import logoMuscle from "../assets/images/icon-muscle.svg";
import logoPregnacy from "../assets/images/icon-pregnancy.svg";
import logoRace from "../assets/images/icon-race.svg"
import LimitationComponent from "./LimitationComponent";

let limitationsObject = [
    {id: 1, header: "Gender", src: logoGender, text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."},
    {id: 2, header: "Age", src: logoAge, text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."},
    {id: 3, header: "Muscle", src: logoMuscle, text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."},
    {id: 4, header: "Pregnancy", src: logoPregnacy, text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."},
    {id: 5, header: "Race", src: logoRace, text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."}
]

const BmiLimitations = () => {
    return ( 
        <>
        <div className = "limitations--container">
            <h2>Limitations of BMI</h2> 
            <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. 
                Specific groups should carefully consider their BMI outcomes, 
                and in certain cases, the measurement may not be beneficial to use.</p>
        </div>
        <div className="limitation--components">
        { limitationsObject.map(object => (
            <LimitationComponent key = {object.id} header={object.header} src={object.src} text={object.text}/>
        ))}
        </div>
        </>
     )
}
 
export default BmiLimitations;