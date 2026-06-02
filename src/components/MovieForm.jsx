import { useState } from "react";

const initialForm = {
  title: "",
  description: "",
  genre: "",
};

function MovieForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
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
          <option value="drama">Drama</option>
          <option value="2">Acción</option>
          <option value="Comedia">Comedia</option>
          <option value="Terror">Terror</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
        </select>
      </div>

      <button className="button movie-form-button" type="submit">
        Guardar pelicula
      </button>
    </form>
  );
}

export default MovieForm;
