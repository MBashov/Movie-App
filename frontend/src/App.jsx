import { Routes, Route } from 'react-router-dom'
import './css/App.css'

import { MovieProvider } from './context/MovieContext'
import NavBar from './components/NavBar'
import Home from './pages/home'
import Favorites from './pages/Favorites'


function App() {

    return (
        <MovieProvider>
            <NavBar />
            <main className='main-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favorites' element={<Favorites />} />
                </Routes>
            </main>
        </MovieProvider>
    )
}

export default App
