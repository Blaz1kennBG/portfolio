
import { useState } from 'react';
import {useNavigate, Router} from "react-router-dom"
import './App.css';
import AboutMeHOC from './Components/AboutMe/AboutMeHOC';
import AboutPortfolioHOC from './Components/AboutPortfolio/AboutPortfolioHOC';
import IconRedirect from './Components/IconRedirect';

function App() {
 
  const [showAboutMe, setShowAboutMe] = useState(false)
  const [showAboutPortfolio, setShowAboutPortfolio] = useState(false)


  const handleEvents = (type) => {
    if (type === "aboutme") {
   
      setShowAboutMe(!showAboutMe)
      setShowAboutPortfolio(false)
      return
    }
    if (type === "aboutportfolio") {
      setShowAboutPortfolio(!showAboutPortfolio)
      setShowAboutMe(false)
      return
    }
  }

  return (
  
    <div className="App">

      <div className="
        container 
        h-screen
        mx-44
        mt-16
        animate-fade-in-down
        ">
        <div className="
        text-2xl
        text-slate-50	
        tracking-wide
        py-10
        hover:text-3xl
        transition-all
        duration-500
        mx-auto
        mb-52
        font-bold
        font-color-white  
        color-white
       
        ">
          
          <p className="inline">Mariyan Brigov  <IconRedirect />
          <span className="text-gray-600 inline text-sm my-5 mx-5">made with React &amp; Tailwind</span>
         
</p>
        
        </div>


        <div className="
        w-2/3
        text-5xl
        text-slate-50	
        tracking-[.12em]
        transition-all
        duration-500
        font-bold
        
        color-white
        
        "
        >Hey, I'm Mariyan.
          A Front-end developer who loves to code aiming to become Full-Stack developer.
        </div>
        <div className="
        flex
        my-12
        ">
          <button onClick={() => handleEvents("aboutme")}
            className="
    pr-[2em]
    pl-[2em]
    py-[.45em]
    mr-10
    text-slate-50
    border
    border-red-500
    rounded-2xl
    tracking-wider
    hover:tracking-widest
    duration-700
    transition-all

    " >About me</button>

          <button
            className="
    pr-[2em]
    pl-[2em]
    py-[.45em]
    mr-10
    text-slate-50
    border
    border-green-500
    rounded-2xl
    tracking-wider
    hover:tracking-widest
    duration-700
    transition-all
    " 
    onClick={() => handleEvents("aboutportfolio")}
    >About this portfolio</button>
          <button
            className="
    pr-[2em]
    pl-[2em]
    py-[.45em]
    mr-10
    text-slate-50
    border
    border-blue-500
    rounded-2xl
    tracking-wider
    hover:tracking-widest
    duration-700
    transition-all

    " >My Projects
          </button>
        </div>
        <AboutMeHOC isMounted={showAboutMe} />
        <AboutPortfolioHOC isMounted={showAboutPortfolio} />
      </div>
    </div>
    

  );
}

export default App;
