const API_URL = `${import.meta.env.VITE_API_URL}/movies`;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error en la petición");
  }

  return data;
};

export const getMovies = async (
  page = 1,
  limit = 4,
  search = "",
  sortBy = "title",
  order = "asc",
  selectedGenre = "",
) => {
  const queryParams = new URLSearchParams({
    page,
    limit,
    search,
    sortBy,
    order,
    genre: selectedGenre,
  });

  const response = await fetch(`${API_URL}?${queryParams.toString()}`);

  // const response = await fetch(
  //   `${API_URL}?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}&order=${order}&genre=${selectedGenre}`,
  // );

  return handleResponse(response);
};

export const getMovieById = async (movieId) => {
  const response = await fetch(`${API_URL}/${movieId}`);

  return handleResponse(response);
};

export const createMovie = async (movieData) => {
  const token = getToken();

  if (!token) {
    throw new Error("No autorizado");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(movieData),
  });

  return handleResponse(response);
};

export const updateMovie = async (movieId, movieData) => {
  const token = getToken();

  if (!token) {
    throw new Error("No autorizado");
  }

  const response = await fetch(`${API_URL}/${movieId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(movieData),
  });

  return handleResponse(response);
};

export const deleteMovie = async (movieId) => {
  const token = getToken();

  if (!token) {
    throw new Error("No autorizado");
  }

  const response = await fetch(`${API_URL}/${movieId}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });

  return handleResponse(response);
};
