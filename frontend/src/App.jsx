import './App.css'
import Dashboard from './components/compounds/Dashhboard'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Signup from './components/compounds/Signup';
import Signin from './components/compounds/Signin';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout></RootLayout>,
    children: [{
      path: "/home",
      element : <Dashboard/>
    },
    {
      path: "/signup",
      element : <Signup/>
    },
    {
      path: "/signin",
      element: <Signin/>
    }],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
};

export default App;