import Search from "./screen/search";
import Homepage from "./screen/homePage";
import Representative_details from "./screen/representative_details";
import Representatives from "./screen/representatives";
import { Route, Routes } from "react-router-dom";
import Petition_page from "./screen/petition_page";
import Petition_details from "./screen/petition_details";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/reps" element={<Representatives />} />
            <Route path="/reps_details" element={<Representative_details />} />
            <Route path="/petition_page" element={<Petition_page />} />
            <Route path="/petition_details" element={<Petition_details />} />
        </Routes>
    );
}

export default App;
