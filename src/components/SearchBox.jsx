import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await getMovies(1, 3, search);

      setResults(movies);
    };

    loadMovies();
  }, [search]);

  return (
    <div className="search-box">
      <input
        className="search-box-input"
        type="search"
        placeholder="Buscar..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {search.trim() != "" && (
        <div className="search-box-results">
          {results.length > 0 ? (
            results.map((movie) => (
              <Link
                key={movie._id}
                onClick={() => setSearch("")}
                className="search-box-result"
                to={`/movies/${movie._id}`}
              >
                <strong>{movie.title}</strong>
                <span>
                  {movie.genre} - {movie.year}
                </span>
              </Link>
            ))
          ) : (
            <p className="search-box-empty">No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
