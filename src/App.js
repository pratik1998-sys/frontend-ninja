import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Home, QuizPage, Footer, Error } from './Components/index'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/quiz/:id' element={<QuizPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
