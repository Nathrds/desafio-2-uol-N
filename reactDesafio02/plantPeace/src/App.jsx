import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './pages/Home/Home'
import Footer from './components/footer/Footer'
import Register from './pages/Register/Register'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
