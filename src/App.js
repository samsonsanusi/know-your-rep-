import Search from "./screen/search";
import Homepage from "./screen/homePage";
import Representative_details from "./screen/representative_details"
import Representatives from "./screen/representatives";
import { Route, Routes } from "react-router-dom";
import Petition_page from "./screen/petition_page";



function App(){
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/reps" element={<Representatives />} />
      <Route path="/reps_details" element={<Representative_details />} />
      <Route path="/petition_page" element={<Petition_page />} />
    </Routes>
  )
}

export default App