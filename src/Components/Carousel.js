import { useEffect, useRef, useState } from "react";

const Carousel = () => {
    const slideRef = useRef()
    const featuredImages = [
        'https://images.unsplash.com/photo-1526170160160-1a5eb242ab58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
         'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 
         'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
        ];
        let count = 0
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleOnNextClick = () => {
        if (currentIndex ===  featuredImages.length-1)

         {  setCurrentIndex(0) }

        if (currentIndex >= 0  && currentIndex < featuredImages.length-1) 

        {  setCurrentIndex(currentIndex+1) }

        return slideRef.current.classList.add("fade-anim");
    };

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
      };

    const handleOnPrevClick = () => {
        const productLenght = featuredImages.length
        count = (currentIndex + productLenght-1) % productLenght
        setCurrentIndex(count)
        console.log(slideRef)
        slideRef.current.classList.add("fade-anim");

    };

    useEffect(() => {
            slideRef.current.addEventListener("animationend", removeAnimation)
    }, [])

   

    return (
        <div className="max-w-screen-xl m-auto aspect-w-16 aspect-w-9 mt-5 flex justify-center">
          <div  ref={slideRef} className="w-full relative select-none">
            <img src={featuredImages[currentIndex]} alt=""/>
    
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3 ">
              <button onClick={() => handleOnPrevClick()}>Previous</button>
              <button onClick={() => handleOnNextClick()}>Next</button>
           
            </div>
          </div>
        </div>
      );
}
 
export default Carousel;