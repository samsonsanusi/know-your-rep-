import Search from './screen/search'
import Homepage from './screen/homePage'
import RepresentativeDetails from './screen/representativedetails'
import Representatives from './screen/representatives'
import Petitions from './screen/petitions'
import PetitionDetails from './screen/petitiondetails'
import Feedbacks from './screen/feedback'
import Login from './screen/login'
import Register from './screen/register'
import CreatePetition from './screen/createPetition'
import WriteFeedback from './screen/writeFeedback'
import QuizOne from './screen/quizOne'
import QuizTwo from './screen/quizTwo'
import QuizThree from './screen/quizThree'
import Reports from './screen/reports '
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='homePage' element={<Homepage />} />
      <Route path='/search' element={<Search />} />
      <Route path='/reps' element={<Representatives />} />
      <Route
        path='/representativedetails'
        element={<RepresentativeDetails />}
      />
      <Route path='petitions' element={<Petitions />} />
      <Route path='petitiondetails' element={<PetitionDetails />} />
      <Route path='feedbacks' element={<Feedbacks />} />
      <Route path='register' element={<Register />} />
      <Route path='createPetition' element={<CreatePetition />} />
      <Route path='writeFeedback' element={<WriteFeedback />} />
      <Route path='quizOne' element={<QuizOne />} />
      <Route path='quizTwo' element={<QuizTwo />} />
      <Route path='quizThree' element={<QuizThree />} />
      <Route path='reports' element={<Reports />} />
    </Routes>
  )
}

export default App
