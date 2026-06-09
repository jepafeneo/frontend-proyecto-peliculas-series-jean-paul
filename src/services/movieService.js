const API_URL = "http://localhost:3000/api/movies";

export const getMovies = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener las peliculas");
  }

  const data = await response.json();

  return data;
};

export const getMovieById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al obtener la pelicula");
  }

  const data = await response.json();

  return data;
};

export const createMovie = async (movieData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movieData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al crear la pelicula");
  }

  return response.json();
};

export const updateMovie = async (movieId, movieData) => {
  const response = await fetch(`${API_URL}/${movieId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movieData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al actualizar la pelicula");
  }

  return response.json();
};

export const deleteMovie = async (movieId) => {
  const response = await fetch(`${API_URL}/${movieId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al eliminar la pelicula");
  }

  return response.json();
};
