import Search from "./search";
import Homepage from "./homePage";
import Representative_details from "./representative_details"
import Representatives from "./representatives";
import { Route, Routes } from "react-router-dom";


function App(){
  return (
    <Routes>
      <Route path="/" element={<Representative_details />} />
      <Route path="/search" element={<Search/>} />
      <Route path="/reps" element={<Representatives />} />
    </Routes>
  )
}

export default App