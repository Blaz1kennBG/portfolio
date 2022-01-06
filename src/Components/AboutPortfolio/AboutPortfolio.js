import { useEffect, useState } from "react";
import { Icon} from "@iconify/react"
const AboutPortfolio = ({shouldFade}) => {

        const [fadeIn, setFadeIn] = useState(shouldFade)

        useEffect(() => {
          setFadeIn(shouldFade)
        }, [shouldFade])
       
          return ( 
              <div 
              className={`${fadeIn ? "animate-fade-in-down" : "animate-fade-out-down"} mt-16 w-2/3 text-slate-50 text-2xl tracking-wide leading-loose pb-32 transition-opacity` }  >
          <p className="text-5xl my-8">Made with <Icon icon="logos:react" className="inline text-6xl"/>   </p>
          <p className="text-5xl my-8">Styled using <Icon icon="logos:tailwindcss" className="inline text-white"/></p>
          <p className="text-5xl">Icons  from <Icon icon="line-md:iconify2" className="inline text-5xl text-gray-300"/> iconify</p>
              </div>
           );
      }
      
 
export default AboutPortfolio;