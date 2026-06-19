import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";
import { getMovies } from "../services/movieService";
import MovieFilters from "../components/MovieFilters";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch {
        setError("No se pudieron cargar las peliculas");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      const field =
        sortBy === "newest" || sortBy === "oldest" ? "year" : "title";
      const order = sortBy === "az" || sortBy === "newest" ? "asc" : "desc";

      const movies = await getMovies(search, field, order, selectedGenre);

      setMovies(movies);
    };

    loadMovies();
  }, [search, selectedGenre, sortBy]);

  const hasResults = movies.length > 0;

  const genres = ["Todos", ...new Set(movies.map((movie) => movie.genre))];

  if (loading) {
    return <p className="empty-message">Cargando peliculas...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  return (
    <main>
      <section className="catalog-section">
        <div className="container">
          <div className="section-header">
            <h2>Explorar catálogo</h2>
            <p>Busca películas y series por título y descripción.</p>
          </div>

          <MovieFilters
            search={search}
            selectedGenre={selectedGenre}
            sortBy={sortBy}
            genres={genres}
            onSearchChange={setSearch}
            onGenreChange={setSelectedGenre}
            onSortChange={setSortBy}
          />

          {hasResults ? (
            <MovieList movies={movies} />
          ) : (
            <p className="empty-message">
              No encontramos resultados para la búsqueda
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default MoviesPage;
