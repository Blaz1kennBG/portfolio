import { Icon } from "@iconify/react";

const MyTechnologies = () => {


    return (
        <div className="flex flex-row">

      
        <div className="my-20 mr-10
           w-48
           flex
           flex-1
           flex-col
           " >
          <Icon icon="logos:react" className="text-5xl" />
          <h1 className="font-extrabold text-4xl my-3">Front-End</h1>
          <p className="text-gray-400 leading-snug text-xl">
            Experience with React.js
          </p>
        </div>
        <div className="my-20 mr-5
           w-48
           flex
           flex-1
          flex-col
           " >
          <Icon icon="logos:express" className="text-5xl" />
          <h1 className="font-extrabold text-4xl my-3">Back-End</h1>
          <p className="text-gray-400 leading-snug text-xl">
            Experience with ExpressJS
          </p>
        </div>
           <div className="my-20 mr-5
           w-48
           flex
           flex-1
          flex-col
           " >
          <Icon icon="vscode-icons:file-type-mongo" className="text-5xl" />
          <h1 className="font-extrabold text-4xl my-3">Data Base</h1>
          <p className="text-gray-400 leading-snug text-xl">
            Experience with MongoDB
          </p>
        </div>
        </div>
    )
}

export default MyTechnologies