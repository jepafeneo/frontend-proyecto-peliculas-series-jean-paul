import { movies } from "../data/movies";
import MovieList from "../components/MovieList";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");

  // Sergio
  let filteredMovies = [];

  if (search || selectedGenre != "Todos") {
    filteredMovies = movies.filter((movie) => {
      const matchesSearch =
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie?.description?.toLowerCase().includes(search.toLowerCase());

      const matchesGenre =
        selectedGenre == "Todos" || movie.genre == selectedGenre; // 1 === '1'

      return matchesSearch && matchesGenre;
    });
  }

  // Pelayo
  // const filteredMovies = movies.filter((movie) => {
  //   const matchesGenre =
  //     selectedGenre == "Todos" || movie.genre == selectedGenre;

  //   return matchesGenre;
  // });

  // const matchSearch =
  //   vehicle.marca.toLowerCase().includes(search.toLowerCase()) ||
  //   vehicle?.modelo?.toLowerCase().includes(search.toLowerCase());
  // const matchCombustible = combustibleFilter
  //   ? vehicle.combustible === combustibleFilter
  //   : true;
  // return matchSearch && matchCombustible;

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy == "az") {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }

    if (sortBy === "newest") {
      return b.year - a.year;
    }

    if (sortBy === "oldest") {
      return a.year - b.year;
    }
  });

  const featuredMovies = movies.filter((movie) => movie.featured);

  const newMovies = movies.slice(0, 3); // 3 primeras

  const hasResults = filteredMovies.length > 0;

  const genres = ["Todos", ...new Set(movies.map((movie) => movie.genre))];

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

          <select
            className="filter-select"
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <select
            className="filter-select"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="default">Orden por defecto</option>
            <option value="az">A-Z</option>
            <option value="newest">Más nuevo</option>
            <option value="oldest">Más viejo</option>
          </select>

          {/* {hasResults ? (
            <MovieList movies={filteredMovies} />
          ) : (
            <p className="empty-message">
              No encontramos resultados para la busqueda
            </p>
          )} */}

          {/* Pelayo */}
          {/* <MovieList movies={filteredMovies} /> */}

          {/* Sergio */}
          {search && !hasResults && (
            <p className="empty-message">
              No encontramos resultados para la busqueda
            </p>
          )}

          {hasResults && <MovieList movies={sortedMovies} />}
        </div>
      </section>
    </main>
  );
}

export default Home;
