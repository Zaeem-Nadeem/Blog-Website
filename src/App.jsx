import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}

export default App
