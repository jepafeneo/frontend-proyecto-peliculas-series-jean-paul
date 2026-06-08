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
    throw new Error("Error al obtener la pelicula");
  }

  const data = await response.json();

  return data;
};
