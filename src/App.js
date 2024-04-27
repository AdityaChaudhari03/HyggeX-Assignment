import React from 'react'
import VideoComponent from './components/VideoComponent'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
<div className='bg-gray-50'>
    <div className='w-10/12 mx-auto '>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VideoComponent />}/>
        </Routes>
      </BrowserRouter>
    </div>
</div>
    
  )
}

export default App
