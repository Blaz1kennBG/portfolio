import { useEffect, useState } from "react";
import MyJourney from "./MyJourney";



const AboutMe = ({ shouldFade }) => {
  const [fadeIn, setFadeIn] = useState(shouldFade)

  useEffect(() => {
    setFadeIn(shouldFade)
  }, [shouldFade])

  return (
    <div
      className={`${fadeIn ? "animate-fade-in-down" : "animate-fade-out-down"} mt-16 w-2/3 text-slate-50 text-2xl tracking-wide leading-loose pb-32 transition-opacity`} >
         <h1 className="font-extrabold text-6xl my-4 ">Autobiography</h1>
         <p className="font-extrabold text-3xl my-4">Location: <span className="text-2xl text-gray-200"> Bulgaria, Burgas</span></p>
         <p className="font-extrabold text-3xl my-4">Age: <span className="text-2xl text-gray-200">20</span></p>
         <p className="font-extrabold text-3xl my-4">Hobbies: <span className="text-2xl text-gray-200"> Cars, Gaming</span></p>
      <p className="text-gray-400 mb-5">I am 20 years old from Bulgaria, Burgas.My journey started right after graduating high-school. Started studying at Softuni, an online academy and a lot of self-teaching code practices and whatnot.
      Burning passion to experience new technologies, Meet &#38; Code with other coders and expand my knowledge.</p>

    <MyJourney />
   
     
    </div>
  );
}

export default AboutMe;