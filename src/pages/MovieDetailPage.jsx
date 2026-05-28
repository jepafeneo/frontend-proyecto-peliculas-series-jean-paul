import { Link, useParams } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetailPage() {
  const { id } = useParams();

  const movie = movies.find((m) => m.id == id); // 1 == '1'
  //   const movie = movies.find((m) => m.id === Number(id)); // 1 === 1

  if (!movie) {
    return (
      <main>
        <section className="catalog-section">
          <div className="container">
            <h1>Contenido no encontrado</h1>
            <Link className="button" to="/movies">
              Volver al catalogo
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="catalog-section">
        <div className="container">
          <article className="movie-detail">
            <img src={movie.image} alt={movie.title} />

            <div className="movie-detail-content">
              <h1>{movie.title}</h1>

              <p className="movie-detail-description">{movie?.description}</p>
              <p>Genero: {movie.genre}</p>
              <span>Año: {movie.year}</span>
            </div>
          </article>

          <Link className="button" to="/movies">
            Volver al catalogo
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MovieDetailPage;
