import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies, getMoviesFeatured } from "../services/movieService";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [moviesCienciaFiccion, setMoviesCienciaFiccion] = useState([]);
  const [moviesFeatured, setMoviesFeatured] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getMovies(
          1,
          3,
          "",
          "title",
          "asc",
          "Ciencia ficción",
        );

        setMoviesCienciaFiccion(data.movies);

        const dataFeatured = await getMoviesFeatured();
        setMoviesFeatured(dataFeatured.movies);

        const dataNewMovies = await getMovies(1, 3, "", "year", "desc");
        setNewMovies(dataNewMovies.movies);
      } catch {
        setError("No se pudieron cargar la peliculas");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (loading) {
    return <p className="empty-message">Cargando peliculas...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          {/* <img src="https://picsum.photos/1100/200" alt="Lorem Picsum" /> */}

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
          <h2>Películas de Ciencia Ficción</h2>

          <MovieList movies={moviesCienciaFiccion} />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>Contenido destacado</h2>

          <MovieList movies={moviesFeatured} />
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
