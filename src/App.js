import Search from './screen/search'
import Homepage from './screen/homePage'
import RepresentativeDetails from './screen/representativedetails'
import Representatives from './screen/representatives'
import { Route, Routes } from 'react-router-dom'
import Petitions from './screen/petitions'
import PetitionDetails from './screen/petitiondetails'
import Feedbacks from './screen/feedback'
import Login from './screen/login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/search' element={<Search />} />
      <Route path='/reps' element={<Representatives />} />
      <Route
        path='/representativedetails'
        element={<RepresentativeDetails />}
      />
      <Route path='petitions' element={<Petitions />} />
      <Route path='petitiondetails' element={<PetitionDetails />} />
      <Route path='feedbacks' element={<Feedbacks />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default App
