import { movies } from "../data/movies";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";

function Home() {
  const featuredMovies = movies.filter((movie) => movie.featured);
  const newMovies = movies.slice(0, 3); // 3 primeras

  return (
    <main>
      <section className="hero">
        <div className="container">
          <img src="https://picsum.photos/1100/200" alt="Lorem Picsum" />
          <span className="hero-label">Proyecto final</span>
          <h1>Catálogo de Películas y Series</h1>
          <p>
            Explora películas y series, consulta sus detalles y administra el
            contenido desde un panel privado.
          </p>

          <Link className="button" to="/movies">
            Ver catálogo
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>Contenido destacado</h2>

          <MovieList movies={featuredMovies} />
        </div>
      </section>

      <section className="new-movies-section">
        <div className="container">
          <h2>Nuevas peliculas</h2>

          <MovieList movies={newMovies} />
        </div>
      </section>
    </main>
  );
}

export default Home;
