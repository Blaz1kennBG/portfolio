
const MyJourney = () => {

  return (
    <>
      <div>
        <div className="border-2 border-white w-48 rounded-full mb-4">

        </div>
        <h1 className="font-extrabold text-6xl my-2 flex">My Journey</h1>
        <div className="flex flex-row">


          <div className="my-20 w-20 flex flex-1 flex-col" >

            <h1 className="font-extrabold text-4xl my-3">June 2020</h1>
            <p className="text-gray-400 leading-snug text-xl">
              Started studying Javascript.
     </p>

          </div>


          <div className="my-20  w-20 flex flex-1 flex-col" >

            <h1 className="font-extrabold text-4xl my-3">May 2021</h1>
            <p className="text-gray-400 leading-snug text-xl">
              Started studying ExpressJS and MongoDB
     </p>

          </div>
          <div className="my-20  w-20 flex flex-1 flex-col" >

            <h1 className="font-extrabold text-4xl my-3">November 2021</h1>
            <p className="text-gray-400 leading-snug text-xl">
              Started studying React.js
   </p>

          </div>
        </div>
      </div>
    </>
  )
}
export default MyJourney