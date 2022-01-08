import { useEffect, useState } from "react";
import { Icon} from "@iconify/react"
import Carousel from "../Carousel";


const MyProjects = ({shouldFade, project}) => {

        const [fadeIn, setFadeIn] = useState(shouldFade)

        useEffect(() => {
            console.log(project)
          setFadeIn(shouldFade)
        }, [shouldFade])
       
          return ( 
              <div 
              className={`${fadeIn ? "animate-fade-in-down" : "animate-fade-out-down"}
                my-16 
                mx-8
                w-1/4

                text-slate-50
                tracking-wide
                leading-loose 
                transition-opacity 
                bg-gray-800 
                flex
                flex-col
                justify-center
                ` }  >
                  
                    <h1 className="mx-auto text-3xl mt-5">{project.title}</h1>
                    <div className="mx-auto">
                    {project.iconData && project.iconData.map((data) =>  <Icon icon={data} className="inline text-3xl mt-5 mx-5 text-red-500"/>)}
                    {project.altTech && project.altTech.map((text) => <span className="mx-2">{text}</span>)}
                    </div>
                    <p className="mx-auto text-2xl text-gray-500 w-3/4 text-center h-3/4 mt-7">{project.description}</p>
                   
               
                    <button className="mx-auto mt-5" onClick={() => window.open(project.sourceUrl)}>Source code</button>
                    

                    <Carousel />
        
              </div>
           );
      }
      
 
export default MyProjects;