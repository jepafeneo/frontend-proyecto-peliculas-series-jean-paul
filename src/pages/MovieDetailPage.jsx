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
          <Link className="button" to="/movies">
            Volver al catalogo
          </Link>

          <article className="movie-card">
            <img src={movie.image} alt={movie.title} />

            <div className="movie-card-content">
              <h3>{movie.title}</h3>
              <p>{movie?.description}</p>
              <p>{movie.genre}</p>
              <span>{movie.year}</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default MovieDetailPage;
