import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const { query } = Object.fromEntries(fields)
    console.log({ query })
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name={'query'}
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
