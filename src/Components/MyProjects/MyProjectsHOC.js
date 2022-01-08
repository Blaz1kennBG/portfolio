import { useEffect, useState } from "react"
import MyProjects from "./MyProjects"
import { projectConstants } from "../../constants";
const MyProjectsHOC = ({isMounted}) => {
    const [shouldRender, setShouldRender] = useState(isMounted)
    const [fade, setFade] = useState(true)
    useEffect(() => {
      console.log(projectConstants)
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
        {shouldRender && 
        <div className="flex flex-row flex-wrap">
        {projectConstants.map((currentProject) => <MyProjects shouldFade={fade} project={currentProject} key={currentProject.id}/> ) }
        </div>
        }
      </>
  
    );
  }
 

 
export default MyProjectsHOC;