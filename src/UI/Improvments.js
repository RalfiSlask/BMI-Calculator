import logoEating from "../assets/images/icon-eating.svg";
import logoExcercise from "../assets/images/icon-exercise.svg";
import logoSleep from "../assets/images/icon-sleep.svg";

let improvmentObjects = [
    {id: 1, logo: logoEating, header: "Healthy eating", text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."},
    {id: 2, logo: logoExcercise, header: "Regular excercise", text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."},
    {id: 3, logo: logoSleep, header: "Adequate sleep", text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."}
]

const Improvments = () => {
    return ( 
        <>
            <div className="improvments--container">
            { improvmentObjects.map(object => (
                <div className="improvment--container" key={object.id}>
                    <img src={object.logo} alt={object.header} />
                    <div className="improvment--wrapper">
                        <h2>{object.header}</h2>
                        <p>{object.text}</p>
                    </div>
                </div>
            )) }
            </div>
        </>
     );
}
 
export default Improvments;