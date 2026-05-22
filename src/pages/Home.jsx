function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <img src="https://picsum.photos/1100/200" alt="Lorem Picsum" />
          <span className="hero-label">Proyecto final</span>
          <h1>Catálogo de Películas y Series</h1>
          <p>
            Explora películas y series, consulta sus detalles y administra el
            contenido desde un panel privado.
          </p>
          <a className="button" href="#">
            Ver catálogo
          </a>
        </div>
      </section>

      {/* <div style={{ width: "300", border: "solid red" }}>
        <img src="https://picsum.photos/300/100" alt="Lorem Picsum" />
      </div> */}

      <img src="https://picsum.photos/2200/300" alt="Lorem Picsum" />
    </main>
  );
}

export default Home;
