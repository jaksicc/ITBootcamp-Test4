import { useEffect, useState } from "react";
import Launches from "./components/Launches";
import Select from "./components/Select";
import { getAllLaunches } from "./service";

const App = () => {

  const [launches, setLaunches] = useState([])
  const [select, setSelect] = useState()
  console.log(launches);

  useEffect(() => {
    getAllLaunches().then(res => {
      setLaunches(res.data)
    })
  }, [])

  return (
    <>
      <Select select={select} setSelect={setSelect} />
      <Launches launches={launches.slice(0, select)} />
    </>
  )
}

export default App;
