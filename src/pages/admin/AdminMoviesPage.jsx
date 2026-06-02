import { useState } from "react";
import { movies } from "../../data/movies";
import MovieForm from "../../components/MovieForm";

function AdminMoviesPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="admin-section">
      <div className="admin-page-header">
        <div>
          <h2>Administración de películas</h2>
          <p>Listado interno de películas y series.</p>
        </div>

        <button
          className="admin-create-button"
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cerrar el formulario" : "Nueva película"}
        </button>
      </div>

      {showForm && <MovieForm />}

      <div className="admin-list">
        {movies.map((movie) => (
          <article className="admin-list-item" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <div>
              <h3>{movie.title}</h3>
              <p>
                {movie.genre} • {movie.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdminMoviesPage;
