import { useEffect, useState, useRef } from "react";
// import { movies as initialMovies } from "../../data/movies";
import MovieForm from "../../components/MovieForm";
import {
  createMovie,
  getMovies,
  updateMovie,
} from "../../services/movieService";

function AdminMoviesPage() {
  const [showForm, setShowForm] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [message, setMessage] = useState("");
  const [movieToDelete, setMovieToDelete] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch {
        setError("No se pudieron cargar la peliculas");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const messageRef = useRef(null);

  const handleCreateMovie = async (movieData) => {
    try {
      const newMovie = await createMovie(movieData);

      setMovies([...movies, newMovie]);
      setShowForm(false);
      setMessage("Pelicula creada correctamente");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteMovie = (id) => {
    // const confimed = confirm("¿Desea eliminar esta pelicula?");

    // if (!confimed) {
    //   return;
    // }

    const filteredMovies = movies.filter((movie) => movie._id != id);
    setMovies(filteredMovies);

    setMovieToDelete(null);

    setMessage("Pelicula eliminada correctamente");
  };

  const handleUpdateMovie = async (movieId, movieData) => {
    try {
      const updatedMovie = await updateMovie(movieId, movieData);

      const updatedMovies = movies.map((movie) => {
        if (movie._id == movieId) {
          return updatedMovie;
        }

        return movie;
      });

      setMovies(updatedMovies);
      setSelectedMovie(null);
      setShowForm(false);

      setMessage("Pelicula actualizada correctamente");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!message) {
      return;
    }

    messageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

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

  if (loading) {
    return <p className="empty-message">Cargando peliculas...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  return (
    <section className="admin-section">
      {message && (
        <p ref={messageRef} className="admin-message">
          {message}
        </p>
      )}

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
          <article className="admin-list-item" key={movie._id}>
            <img src={movie.image} alt={movie.title} />
            <div>
              <h3>{movie.title}</h3>
              <p>
                {movie.genre} • {movie.year}{" "}
              </p>

              <div className="admin-actions">
                <button
                  className="admin-action-button edit"
                  type="button"
                  onClick={() => {
                    setSelectedMovie(movie);
                    setShowForm(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="admin-action-button delete"
                  type="button"
                  onClick={() => setMovieToDelete(movie)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {movieToDelete && (
        <div className="modal-overlay" onClick={() => setMovieToDelete(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h2>Eliminar película</h2>

            <p>
              ¿Desea eliminar <strong>{movieToDelete.title}</strong>?
            </p>

            <div className="modal-actions">
              <button
                className="modal-button secondary"
                type="button"
                onClick={() => setMovieToDelete(null)}
              >
                Cancelar
              </button>

              <button
                className="modal-button danger"
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
