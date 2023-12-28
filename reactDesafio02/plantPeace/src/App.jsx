import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './pages/Home/Home'
//import Register from './pages/Register/Register'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
