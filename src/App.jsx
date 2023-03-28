import './App.css'
import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect } from 'react'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una película si el input está vacío')
      return
    }
    if (query.length < 3) {
      setError('La película debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [query])

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name={'query'}
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
