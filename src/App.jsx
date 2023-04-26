import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProject from './pages/AddProject'
import DocsPage from './pages/DocsPage'
import HomePage from './pages/HomePage'
import ViewProject from './pages/ViewProject'
import Contributing from './pages/Contributing'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MyProjects from './pages/MyProjects'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
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
          <Route path='/Login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/myprojects' element={<MyProjects />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App