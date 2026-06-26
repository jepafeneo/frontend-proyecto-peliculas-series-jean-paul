import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const movie = {
  _id: "1",
  title: "Inception",
  genre: "Sci-Fi",
  year: 2010,
  image: "https://example.com/inception.jpg",
};

describe("MovieCard", () => {
  test("espero que muestra la informacion de una pelicula", () => {
    render(
      <MemoryRouter>
        <MovieCard movie={movie} />
      </MemoryRouter>,
    );

    const image = screen.getByAltText("Inception");
    expect(image).toBeInTheDocument();

    expect(screen.getByAltText("Inception")).toBeInTheDocument();

    expect(image).toHaveAttribute("src", "https://example.com/inception.jpg");

    expect(screen.getByText(/incept/i)).toBeInTheDocument();
    expect(screen.getByText("Sci-Fi")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();
  });
});
