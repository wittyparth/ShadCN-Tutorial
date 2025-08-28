import Home from "./pages/Home"
import {BrowserRouter,Route, Routes} from "react-router-dom"
import UserDetails from "./pages/UserDetails"
import UsersPage from "./components/UsersPage/UsersPage"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/users" Component={UsersPage}/>
      <Route path="/users/:id" Component={UserDetails}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App