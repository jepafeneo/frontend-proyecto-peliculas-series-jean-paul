import { movies } from "../../data/movies";
import { Link } from "react-router-dom";

function AdminMoviesPage() {
  return (
    <section className="admin-section">
      <div className="admin-section-header">
        <div>
          <h2>Admintracion de peliculas</h2>
          <p>Listado interno de películas y series.</p>
        </div>
      </div>

      <Link to="#" className="button">
        Nueva Pelicula
      </Link>

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
