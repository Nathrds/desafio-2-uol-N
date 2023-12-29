import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Products from './pages/Products/Products'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
