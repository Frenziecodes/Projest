import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddProject from './pages/AddProject'
import DocsPage from './pages/DocsPage'
import HomePage from './pages/HomePage'
import ViewProject from './pages/ViewProject'
import Contributing from './pages/Contributing'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/docs' element={<DocsPage/>}/>
      <Route path='/viewprojects' element={<ViewProject/>}/>
      <Route path='/addproject' element={<AddProject/>}/>
      <Route path='/contributing' element={<Contributing/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App