import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";
import { getMovies, getMoviesGenres } from "../services/movieService";
import MovieFilters from "../components/MovieFilters";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getMoviesGenres();

        setGenres(data);
      } catch {
        setError("No se pudieron cargar los géneros");
      }
    };

    loadGenres();
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const field =
          sortBy === "newest" || sortBy === "oldest" ? "year" : "title";
        const order = sortBy === "az" || sortBy === "newest" ? "asc" : "desc";

        // console.log(search, field, order, selectedGenre);

        const data = await getMovies(
          page,
          3,
          search,
          field,
          order,
          selectedGenre,
        );

        setMovies(data.movies);
        setTotalPages(data.totalPages);
      } catch {
        setError("No se pudieron cargar las peliculas");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [search, selectedGenre, sortBy, page]);

  const hasResults = movies.length > 0;

  // const genres = ["Todos", ...new Set(movies.map((movie) => movie.genre))];

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
            <>
              <MovieList movies={movies} />

              <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Anterior
                </button>

                <span className="pagination-info">
                  Pagina {page} de {totalPages}
                </span>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Siguiente
                </button>
              </div>
            </>
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
