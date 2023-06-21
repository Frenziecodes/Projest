import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProject from './pages/AddProject';
import HomePage from './pages/HomePage';
import ViewProject from './pages/ViewProject';
import Contributing from './pages/Contributing';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Layout from './components/Layout';
import NotFound from './pages/404';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/Terms';
import Success from './pages/Success'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/404' element={<NotFound />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/viewprojects' element={<ViewProject />} />
          <Route path='/addproject' element={<AddProject />} />
          <Route path='/privacypolicy' element={<PrivacyPolicyPage />} />
          <Route path='/termsofservice' element={<TermsOfServicePage />} />
          <Route path='/contributing' element={<Contributing />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
