import BodyMass from "./BodyMass";
import BlueBackground from "./UI/BlueBackground";
import Details from "./Details";
import GuyEating from "./UI/GuyEating";
import BmiMeaning from "./UI/BmiMeaning";
import BmiLimitations from "./UI/BmiLimitations";
import Improvments from "./UI/Improvments";


function App() {
  return (
    <>
      <main>
        <BlueBackground />
        <BodyMass />
        <Details />
        <GuyEating />
        <BmiMeaning />
        <Improvments />
        <BmiLimitations />
      </main>
    </>
  );
}

export default App;
