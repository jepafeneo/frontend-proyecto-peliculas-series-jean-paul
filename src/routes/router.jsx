import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import MoviePage from "../pages/MoviesPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <MoviePage />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetailPage />,
      },
      // {
      //   path: "*",
      //   element: <NotFoundPage />,
      // },
    ],
  },
]);
