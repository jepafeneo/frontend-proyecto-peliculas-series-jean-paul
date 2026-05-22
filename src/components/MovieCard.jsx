function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <span>{movie.year}</span>
      </div>
    </article>
  );
}

export default MovieCard;
