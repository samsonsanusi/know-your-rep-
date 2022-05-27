import Search from './screen/search'
import Homepage from './screen/homePage'
import RepresentativeDetails from './screen/representativedetails'
import Representatives from './screen/representatives'
import { Route, Routes } from 'react-router-dom'

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
    </Routes>
  )
}

export default App
