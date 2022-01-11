
import { useState } from 'react';
import './App.css';
import "./snow.scss"
import AboutMeHOC from './Components/AboutMe/AboutMeHOC';
import AboutPortfolioHOC from './Components/AboutPortfolio/AboutPortfolioHOC';
import IconRedirect from './Components/IconRedirect';
import BackgroundSnow from './Components/BackgroundSnow/BackgroundSnow';
import MyProjectsHOC from './Components/MyProjects/MyProjectsHOC';

function App() {
 
  const [showAboutMe, setShowAboutMe] = useState(false)
  const [showAboutPortfolio, setShowAboutPortfolio] = useState(false)
  const [showMyProjects, setShowMyProjects] = useState(false)
  const [snow, setSnow] = useState(false)

  const handleEvents = (type) => {
    if (type === "aboutme") {
   
      setShowAboutMe(!showAboutMe)
      setShowMyProjects(false)
      setShowAboutPortfolio(false)
      return
    }
    if (type === "aboutportfolio") {
      setShowAboutPortfolio(!showAboutPortfolio)
      setShowMyProjects(false)
      setShowAboutMe(false)
      return
    }
    if (type === "myprojects") {
      setShowAboutPortfolio(false)
      setShowAboutMe(false)
      setShowMyProjects(!showMyProjects)
      return
    }
  }

  return (
  
    <div className="App">
   
      <div className="
        container 
        h-screen
        2xl:mx-32 mt-8 
        xl:mx-20 mt-8 
        lg:mx-20 mt-4
        md:mx-10 mt-2 
        sm:mx-5 mt-2
        animate-fade-in-down
        
        ">
     
          {snow && <BackgroundSnow />}
        
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
          <span className="text-gray-400 inline text-sm my-5 mx-5">made with React &amp; Tailwind</span>
          <span className="float-right text-sm" onClick={() => setSnow(!snow)}>TOGGLE SNOW</span>
         </p>
        
        </div>


        <div className="
        w-2/3
        
        text-slate-50	
        tracking-[.12em]
        transition-all
        duration-500
        font-bold
        color-white
        "
        >
          <p className=" 
        2xl:text-5xl
        xl:text-5xl
        lg:text-4xl
        md:text-3xl
        sm:text-2xl
        
        ">Hey, I'm Mariyan.
          A Front-end developer who loves to code aiming to become Full-Stack developer.</p>
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
    >Technologies</button>
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

    " onClick={() => handleEvents("myprojects")}>My Projects
          </button>
        </div>
        <AboutMeHOC isMounted={showAboutMe} />
        <AboutPortfolioHOC isMounted={showAboutPortfolio} />
        <MyProjectsHOC isMounted={showMyProjects} />
         
      </div>
    </div>
    

  );
}

export default App;
