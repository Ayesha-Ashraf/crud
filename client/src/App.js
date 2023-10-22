import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './Components/Users'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'
 
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/edit/:id' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
 
export default App