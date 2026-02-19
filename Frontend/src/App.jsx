import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Browse from './Pages/Browse'
import Profile from './Pages/Profile'
import JobDescription from './components/JobDescription'
const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<Home/>
  },
  {
  path:"/login",
  element:<Login/>
  },
  {
  path:"/signup",
  element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  }
])
function App() {
  return (
    <>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
        
    </>
  )
}

export default App
