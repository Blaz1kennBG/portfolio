import { useEffect, useState } from "react";
import MyJourney from "./MyJourney";
import MyTechnologies from "./MyTechnologies";


const AboutMe = ({ shouldFade }) => {
  const [fadeIn, setFadeIn] = useState(shouldFade)

  useEffect(() => {
    setFadeIn(shouldFade)
  }, [shouldFade])

  return (
    <div
      className={`${fadeIn ? "animate-fade-in-down" : "animate-fade-out-down"} mt-16 w-2/3 text-slate-50 text-2xl tracking-wide leading-loose pb-32 transition-opacity`} >
         <h1 className="font-extrabold text-6xl my-4 ">Technologies</h1>
      <p className="text-gray-400">All the technologies i have experienced till now. </p>
       
      <MyTechnologies />
    
 
    <MyJourney />
   
     
    </div>
  );
}

export default AboutMe;