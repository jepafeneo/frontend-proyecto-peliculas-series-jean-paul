import { movies } from "../data/movies";
import MovieList from "../components/MovieList";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie?.description?.toLowerCase().includes(search.toLowerCase()),
  );

  const featuredMovies = movies.filter((movie) => movie.featured);

  const newMovies = movies.slice(0, 3); // 3 primeras

  const hasResults = filteredMovies.length > 0;

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
          <a className="button" href="#">
            Ver catálogo
          </a>
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

      <section className="catalog-section">
        <div className="container">
          <div className="section-header">
            <h2>Explorar catálogo</h2>
            <p>Busca películas y series por título y descripción.</p>
          </div>

          <label className="search-label" htmlFor="search">
            Buscar por titulo o descripción:
          </label>
          <input
            className="search-input"
            placeholder="Buscar por titulo o descripción..."
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {hasResults ? (
            <MovieList movies={filteredMovies} />
          ) : (
            <p className="empty-message">
              No encontramos resultados para la busqueda
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
