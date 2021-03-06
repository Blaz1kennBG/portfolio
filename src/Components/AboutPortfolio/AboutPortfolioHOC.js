import { useEffect, useState } from "react"
import AboutPortfolio from "./AboutPortfolio"

const AboutPortfolioHOC = ({isMounted}) => {
    const [shouldRender, setShouldRender] = useState(isMounted)
    const [fade, setFade] = useState(true)
    useEffect(() => {
      let timeoutID = undefined
      /* If it is isMounted, remove after 1 sec */
      if (!isMounted) {
  
        setFade(isMounted)
        timeoutID = setTimeout(() => setShouldRender(isMounted), 2000)
      }
      /*   If it's not isMounted, render immediately */
      else {
  
        setFade(isMounted)
        setShouldRender(isMounted)
      }
      return () => {
        if (timeoutID) {
          clearTimeout(timeoutID)
  
        }
      }
  
    }, [isMounted])
    return (
      <>
        {shouldRender && <AboutPortfolio shouldFade={fade} />}
      </>
  
    );
  }
 

 
export default AboutPortfolioHOC;