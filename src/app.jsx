import './App.css'
import Contacts from './Component/Contacts/Contacts'
import About from './Component/About/About'
import Protofolio from './Component/Protofolio/Protofolio'
import Layout from './Component/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export function App() {
let routes=createBrowserRouter([{
  path:"", element: <Layout/>,children:[
    {path:"about", element:<About/>},
    {path:"portfolio", element:<Protofolio/>},
    {path:"contacts", element:<Contacts/>},
    {path:"vite-pro1", element:<About/>},
  
  ]
}])

  return (
    <>
<RouterProvider router={routes}></RouterProvider>
    
      
    </>
  );
}
