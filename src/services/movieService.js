const API_URL = `${import.meta.env.VITE_API_URL}/movies`;

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error en la petición");
  }

  return data;
};

export const getMovies = async () => {
  const response = await fetch(API_URL);

  return handleResponse(response);
};

export const getMovieById = async (movieId) => {
  const response = await fetch(`${API_URL}/${movieId}`);

  return handleResponse(response);
};

export const createMovie = async (movieData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movieData),
  });

  return handleResponse(response);
};

export const updateMovie = async (movieId, movieData) => {
  const response = await fetch(`${API_URL}/${movieId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movieData),
  });

  return handleResponse(response);
};

export const deleteMovie = async (movieId) => {
  const response = await fetch(`${API_URL}/${movieId}`, {
    method: "DELETE",
  });

  return handleResponse(response);
};
