import { Icon } from "@iconify/react";

const MyTechnologies = () => {


    return (
        <div className="flex flex-row">

      
        <div className="my-10 mr-10
           w-48
           flex
           flex-1
           flex-col
           " >
          <Icon icon="logos:react" className="text-5xl" />
          <h1 className="font-extrabold text-4xl my-3">Front-End</h1>
          <p className="text-gray-400 leading-snug text-xl">
           5 Months experience with React.js
          </p>
        </div>
        <div className="my-10 mr-5
           w-48
           flex
           flex-1
          flex-col
           " >
          <h1 className="text-5xl text-gray-300" >ExpressJS</h1>
          <h1 className="font-extrabold text-4xl my-3">Back-End</h1>
          <p className="text-gray-400 leading-snug text-xl">
            6 Months experience with ExpressJS
          </p>
        </div>
           <div className="my-10 mr-5
           w-48
           flex
           flex-1
          flex-col
           " >
          <Icon icon="vscode-icons:file-type-mongo" className="text-5xl" />
          <h1 className="font-extrabold text-4xl my-3">Data Base</h1>
          <p className="text-gray-400 leading-snug text-xl">
          6 Months experience with MongoDB
          </p>
        </div>
        </div>
    )
}

export default MyTechnologies