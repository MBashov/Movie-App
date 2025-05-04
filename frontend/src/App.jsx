import './App.css'
import MovieCard from './components/MovieCard'

function App() {

    const movies = [
        {id: 1, title: 'Terminator', 'release-date': 2020}
    ]

    return (
        <div>
            <MovieCard movie={{id: 1, title: 'Terminator', 'release_date': 2020}}/>
            <MovieCard movie={{id: 2, title: 'Pirates', 'release_date': 2022}}/>
        </div>
    )
}

export default App
