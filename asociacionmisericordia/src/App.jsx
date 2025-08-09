import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#quienes-somos">Quiénes Somos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="inicio">
          <h1>Bienvenida a la Asociación</h1>
          <p>
            ¡Hola! Esta es la página principal de nuestra asociación. Aquí
            encontrarás las últimas noticias, eventos y proyectos.
          </p>
        </section>

        <section id="quienes-somos">
          <h2>Quiénes Somos</h2>
          <p>
            Somos un grupo de personas dedicadas a [misión de la asociación].
            Nuestra visión es [visión de la asociación].
          </p>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>
            Puedes contactarnos a través de nuestro correo electrónico, redes
            sociales o rellenando el formulario de contacto.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;