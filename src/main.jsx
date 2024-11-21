import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About us/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact Us/Contact.jsx'
import User from './components/User/User.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import GitHub, { fun } from './components/GitHub/GitHub.jsx'
// const router=createBrowserRouter([
//   {path:"/",element:<App/>,children:[
//     {
//       path:'/',element:<Home/>
//     },
//     {
//       path:'about',element:<About/>
//     },    {
//       path:'contact',element:<Contact/>
//     },  
//   ]}
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />}>
        <Route path='user' element={<User />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route path='github' element={<GitHub />} loader={fun} />
    </Route> 
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
