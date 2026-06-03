import { useEffect, useState } from "react";
import { movies as initialMovies } from "../../data/movies";
import MovieForm from "../../components/MovieForm";

function AdminMoviesPage() {
  const [showForm, setShowForm] = useState(false);
  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [message, setMessage] = useState("");
  const [movieToDelete, setMovieToDelete] = useState(null);

  const handleCreateMovie = (movieData) => {
    const newMovie = {
      ...movieData,
      id: Date.now(),
    };

    setMovies([...movies, newMovie]);

    setShowForm(false);

    setMessage("Pelicula creada correctamente");
  };

  const handleDeleteMovie = (id) => {
    // const confimed = confirm("¿Desea eliminar esta pelicula?");

    // if (!confimed) {
    //   return;
    // }

    const filteredMovies = movies.filter((movie) => movie.id != id);
    setMovies(filteredMovies);

    setMovieToDelete(null);

    setMessage("Pelicula eliminada correctamente");
  };

  const handleUpdateMovie = (movieId, movieData) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id == movieId) {
        const updatedMovie = {
          ...movie,
          ...movieData,
        };

        return updatedMovie;
      }

      return movie;
    });

    setMovies(updatedMovies);

    setSelectedMovie(null);
    setShowForm(false);

    setMessage("Pelicula actualizada correctamente");
  };

  useEffect(() => {
    if (!message) {
      return;
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  useEffect(() => {
    if (!movieToDelete) {
      return;
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMovieToDelete(null);
      }
    });
  }, [movieToDelete]);

  return (
    <section className="admin-section">
      {message && <p className="admin-message">{message}</p>}

      <div className="admin-page-header">
        <div>
          <h2>Administración de películas</h2>
          <p>Listado interno de películas y series.</p>
        </div>

        <button
          className="admin-create-button"
          type="button"
          onClick={() => {
            setShowForm(!showForm);
            setSelectedMovie(null);
          }}
        >
          {showForm ? "Cerrar el formulario" : "Nueva película"}
        </button>
      </div>

      {showForm && (
        <MovieForm
          movie={selectedMovie}
          onCreateMovie={handleCreateMovie}
          onUpdateMovie={handleUpdateMovie}
        />
      )}

      <div className="admin-list">
        {movies.map((movie) => (
          <article className="admin-list-item" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <div>
              <h3>{movie.title}</h3>
              <p>
                {movie.genre} • {movie.year}{" "}
              </p>

              <div className="admin-actions">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedMovie(movie);
                    setShowForm(true);
                  }}
                >
                  Editar
                </button>
                <button type="button" onClick={() => setMovieToDelete(movie)}>
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {movieToDelete && (
        <div className="modal-overlay" onClick={() => setMovieToDelete(null)}>
          <div className="modal">
            <h2>Eliminar película</h2>

            <p>
              ¿Desea eliminar <strong>{movieToDelete.title}</strong>?
            </p>

            <div className="modal-actions">
              <button type="button" onClick={() => setMovieToDelete(null)}>
                Cancelar
              </button>

              <button
                type="button"
                onClick={() => handleDeleteMovie(movieToDelete.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminMoviesPage;
