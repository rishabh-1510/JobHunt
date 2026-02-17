import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
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
