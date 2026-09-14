import { createContext, useRef, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Dummyone from "../../fortailwind/components/dummy/Dummyone"
import Dummyform from "../../fortailwind/components/dummy/Dummyform";

export const mycreateContext = createContext()

const Homepage = ({children, name}) => {
    const [loading, setLoading] = useState(false);
    const [stateRender, setStateRender] = useState(0);
    const [onlyforDummy, setOnlyforDummy] = useState("hi dummy")
    const [onlyforDummys, setOnlyforDummys] = useState("hi dummysss")
    const inputRef = useRef(null)
    console.log("Homepage rendering")

    const handleClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.name)
    };
    return <mycreateContext.Provider value={{onlyforDummy,onlyforDummys}}>
        {loading ? 
        <div className="flex justify-center items-center h-screen">
            <Skeleton height={30} width={200} borderRadius={20} baseColor="orange"/> 
        </div>: <div>
            <h1>hello homepage</h1>
            {children}
            <Dummyone/>
            {/* <Dummyform/> */}
            <hr />
            <br />
            {/* {name} */}
            <div className="flex justify-center gap-5">
                            <button className="bg-amber-400 py-1 px-2 ml-2 rounded-2xl" onClick={() => setStateRender(v => v+1)}>click</button>
            <br />
            <h1>{stateRender}</h1>
            </div>
            <br />
            <hr />
            <input className="bg-amber-500 border-2 border-black mx-2 my-4" type="text" ref={inputRef}/>

            <button onClick={handleClick}>
                Focus Input
            </button>

            <hr />
            <br />
            <Dummyform/>
        </div>
        }
    </mycreateContext.Provider>
}

export default Homepage;