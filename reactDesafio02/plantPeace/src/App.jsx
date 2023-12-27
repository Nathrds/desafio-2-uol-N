import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './pages/Home/Home'

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
      </BrowserRouter>
    </div>
  )
}

export default App
