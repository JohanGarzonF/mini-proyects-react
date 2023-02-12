export function ListOfMovies ({ movies }) {

  return (
    <ul className="grid-movies">
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

export function NoMoviesResults () {
  return (
    <p>No se encontraron resultados de esta busqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  
  return (
    hasMovies
      ? <ListOfMovies movies={movies}/>
      : <NoMoviesResults />
  )
}