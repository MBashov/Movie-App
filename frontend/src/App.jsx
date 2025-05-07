import { Routes, Route } from 'react-router-dom'
import './css/App.css'

import NavBar from './components/NavBar'
import Favorites from './pages/Favorites'
import { MovieProvider } from './providers/MovieProvider'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'


function App() {

    return (
        <MovieProvider>
            <NavBar />
            <main className='main-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/movie/:movieId' element={<MovieDetails />} />
                </Routes>
            </main>
        </MovieProvider>
    )
}

export default App
