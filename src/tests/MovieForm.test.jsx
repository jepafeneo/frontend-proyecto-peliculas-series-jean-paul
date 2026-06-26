import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieForm from "../components/MovieForm";

describe("MovieForm", () => {
  test("espero que muestre el formulario para crear una pelicula", () => {
    render(
      <MovieForm
        onCreateMovie={() => {}}
        onUpdateMovie={() => {}}
        isSaving={false}
      />,
    );

    expect(screen.getByText("Nueva Pelicula")).toBeInTheDocument();
    expect(screen.getByText("Titulo:")).toBeInTheDocument();
    expect(screen.getByText("Descripción:")).toBeInTheDocument();
    expect(screen.getByText("Genero:")).toBeInTheDocument();
    expect(screen.getByText("Año:")).toBeInTheDocument();
    expect(screen.getByText("Imagen:")).toBeInTheDocument();
    expect(screen.getByText("Destacado:")).toBeInTheDocument();
    expect(screen.getByText("Guardar pelicula")).toBeInTheDocument();
  });

  test("espero que me permita completar los datos del formulario", () => {
    render(
      <MovieForm
        onCreateMovie={() => {}}
        onUpdateMovie={() => {}}
        isSaving={false}
      />,
    );

    fireEvent.click(screen.getByLabelText("Titulo:"), {
      target: { value: "Matrix" },
    });

    fireEvent.click(screen.getByLabelText("Año:"), {
      target: { value: "1999" },
    });

    expect(screen.getByDisplayValue("Matrix")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1999")).toBeInTheDocument();
  });

  test("Esperar que muestre los datos de la pelicula a editar", () => {
    const movie = {
      _id: "1",
      title: "Matrix",
      description: "Una pelicula de ciencia ficción",
      genre: "Acción",
      year: 1999,
      image: "https://example.com/matrix.jpg",
      featured: true,
    };

    render(
      <MovieForm
        movie={movie}
        onCreateMovie={() => {}}
        onUpdateMovie={() => {}}
        isSaving={false}
      />,
    );

    expect(screen.getByText("Editar pelicula")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Matrix")).toBeInTheDocument();
  });
});
