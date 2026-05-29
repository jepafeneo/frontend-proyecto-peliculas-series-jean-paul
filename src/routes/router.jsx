import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import MoviePage from "../pages/MoviesPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

import Adminlayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/admin/DaskboardPage";
import AdminMoviesPage from "../pages/admin/AdminMoviesPage";

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
        path: "movies",
        element: <MoviePage />,
      },
      {
        path: "movies/:id",
        element: <MovieDetailPage />,
      },
      // {
      //   path: "*",
      //   element: <NotFoundPage />,
      // },
    ],
  },
  {
    path: "/admin",
    element: <Adminlayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "movies",
        element: <AdminMoviesPage />,
      },
    ],
  },
]);
