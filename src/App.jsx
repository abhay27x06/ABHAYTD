import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {NetflixSeries} from './components/NetflixSeries'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='*' element={<ErrorPage/ >}/>
      <Route path='/' element={<NetflixSeries />}/>
      <Route path='/about' element={<About/ >}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App