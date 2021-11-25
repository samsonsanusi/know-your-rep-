import Search from "./screen/search";
import Homepage from "./screen/homePage";
import Representative_details from "./screen/representative_details"
import Representatives from "./screen/representatives";
import { Route, Routes } from "react-router-dom";


function App(){
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/reps" element={<Representatives />} />
      <Route path="/reps_details" element={<Representative_details />} />
    </Routes>
  )
}

export default App