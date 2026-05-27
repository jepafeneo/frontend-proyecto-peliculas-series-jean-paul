import { movies } from "../data/movies";
import MovieList from "../components/MovieList";
import { useState } from "react";

function MoviesPage() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie?.description?.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
      selectedGenre == "Todos" || movie.genre == selectedGenre; // 1 === '1'

    return matchesSearch && matchesGenre;
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy == "az") {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }

    if (sortBy === "newest") {
      if (a.year > b.year) return -1;
      if (a.year < b.year) return 1;
      return 0;
    }

    if (sortBy === "oldest") {
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      return 0;
    }
  });

  const hasResults = sortedMovies.length > 0;

  const genres = ["Todos", ...new Set(movies.map((movie) => movie.genre))];

  return (
    <main>
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

          {hasResults ? (
            <MovieList movies={sortedMovies} />
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

export default MoviesPage;
