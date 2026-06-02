import { categories } from "../data/categories";
import { useState } from "react";

const initialForm = {
  title: "",
  description: "",
  genre: "",
  year: "",
  image: "",
  featured: false,
};

function MovieForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type == "checkbox" ? checked : value,
    });
  };

  return (
    <form className="movie-form">
      <h2>Nueva Pelicula</h2>

      <div className="form-group">
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          placeholder="Matrix"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción: </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="genre">Genero: </label>
        <select
          id="genre"
          name="genre"
          value={form.genre}
          onChange={handleChange}
        >
          <option value="">Selecionar un genero</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}

          {/* <option value="drama">Drama</option>
          <option value="2">Acción</option>
          <option value="Comedia">Comedia</option>
          <option value="Terror">Terror</option>
          <option value="Ciencia ficción">Ciencia ficción</option> */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="year">Año: </label>
        <input
          type="number"
          name="year"
          id="year"
          value={form.year}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Imagen: </label>
        <input
          type="text"
          name="image"
          id="image"
          value={form.image}
          onChange={handleChange}
          placeholder="https://..."
        />
      </div>

      {form.image.trim() && (
        <div className="image-preview">
          <img src={form.image} alt="Vista previa" />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="featured">Destacado: </label>
        <input
          type="checkbox"
          name="featured"
          id="featured"
          checked={form.featured}
          onChange={handleChange}
        />
      </div>

      <button className="button movie-form-button" type="submit">
        Guardar pelicula
      </button>
    </form>
  );
}

export default MovieForm;
