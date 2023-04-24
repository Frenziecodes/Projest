import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProject from './pages/AddProject'
import DocsPage from './pages/DocsPage'
import HomePage from './pages/HomePage'
import ViewProject from './pages/ViewProject'
import Contributing from './pages/Contributing'
import Registration from './pages/Registration'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/docs' element={<DocsPage />} />
          <Route path='/viewprojects' element={<ViewProject />} />
          <Route path='/addproject' element={<AddProject />} />
          <Route path='/contributing' element={<Contributing />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App