import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Verification from "./ui/Verification";
import Success from "./ui/Success";
import SignUp from "./ui/SignUp";
import LogIn from "./ui/LogIn";
import Dashboard from "./ui/Dashboard";



const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/log-in",
        element: <LogIn />,
      },
      {
        path: "/verification",
        element: <Verification />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ]
  },
  
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App