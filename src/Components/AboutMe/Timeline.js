const Timeline = () => {

  return (
    <div className="border-b-2 w-80 h-5 flex relative justify-center">
      <div className="flex border-b-1 w-6 h-6 bg-white rounded-full absolute transform translate-y-1/4"></div>
      <div className="absolute border-b-1 w-1 h-6 bg-white transform translate-y-1/4 ml-[75%] "></div> 
      <div className="absolute border-b-1 w-1 h-6 bg-white transform translate-y-1/4 ml-[-75%] "></div> 

    </div>
  )
}
export default Timeline