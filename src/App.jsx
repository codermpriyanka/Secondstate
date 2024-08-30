import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA1 from './ChildA1'
import {createContext} from "react";

const data=createContext();
function App() {
  const name="Priyanka"
  return (
    <>
    <data.Provider value={name}>
    <ChildA1></ChildA1>
    </data.Provider>
      
    </>
  )
}

export default App
export {data};
