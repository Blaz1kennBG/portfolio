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
         <h1 className="font-extrabold text-6xl my-4 ">Autobiography</h1>
      <p className="text-gray-400">I am 20 years old from Bulgaria, Burgas.My journey started right after graduating high-school. </p>
      <p className="text-gray-400">Started studying at Softuni, an online academy and a lot of self-teaching code practices and whatnot. </p>
         <h1 className="font-extrabold text-6xl mt-16 mb-6 ">Technologies</h1>
      <p className="text-gray-400">All the technologies i have experienced till now. </p>
     
      
       
      <MyTechnologies />
    
 
    <MyJourney />
   
     
    </div>
  );
}

export default AboutMe;