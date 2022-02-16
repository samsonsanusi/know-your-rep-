import Search from "./screen/search";
import Homepage from "./screen/homePage";
import RepresentativeDetails from "./screen/representativeDetails";
import Representatives from "./screen/representatives";
import { Route, Routes } from "react-router-dom";
import PetitionPage from "./screen/petitionPage";
import PetitionDetails from "./screen/petitionDetails";
import FeedbackPage from "./screen/feedbackPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/reps" element={<Representatives />} />
            <Route path="/repsdetails" element={<RepresentativeDetails />} />
            <Route path="/petition_page" element={<PetitionPage />} />
            <Route path="/petition_details" element={<PetitionDetails />} />
            <Route path="/feedback_page" element={<FeedbackPage />} />
        </Routes>
    );
}

export default App;
