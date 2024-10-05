import { Link } from "react-router-dom";

function DropDown() {
  return (
    <div className="dropdown-container">
      <nav className="dropdown-container_nav">
        <ul className="dropdown-container_nav_ul">
          <li className="dropdown-container_li_ps5">
            <Link to={"/juegos/filtro/PS5/all"}>
              PS5
              <span>
                <i className="fa-solid fa-caret-down arrow"></i>
              </span>
            </Link>
            <ul className="dropdown">
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS5/Accion"}>Accion</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS5/Aventura"}>Aventura</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS5/Terror"}>Terror</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS5/Deportes"}>Deportes</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS5/RPG"}>RPG</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS5/Plataformas"}>Plataformas</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS5/Lucha"}>Lucha</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS5/Puzzle"}>Puzzle</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS5/Carreras"}>Carreras</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS5/Simulacion"}>Simulacion</Link>
                </li>
              </div>
            </ul>
          </li>
          <li className="dropdown-container_li_ps5">
            <Link to={"/juegos/filtro/PS4/all"}>
              PS4
              <span>
                <i className="fa-solid fa-caret-down arrow"></i>
              </span>
            </Link>
            <ul className="dropdown">
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS4/Accion"}>Accion</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS4/Aventura"}>Aventura</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS4/Terror"}>Terror</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS4/Deportes"}>Deportes</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS4/RPG"}>RPG</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS4/Mundo-Abierto"}>
                    Mundo Abierto
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS4/Lucha"}>Lucha</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS4/Mundo-Abierto"}>
                    Mundo Abierto
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to={"/juegos/filtro/PS4/Carreras"}>Carreras</Link>
                </li>
                <li>
                  <Link to={"/juegos/filtro/PS4/Simulacion"}>Simulacion</Link>
                </li>
              </div>
            </ul>
          </li>
          <li className="dropdown-container_li_ps5">
            <Link to={"/juegos/Membresias/all"}>
              Membresias
              <span>
                <i className="fa-solid fa-caret-down arrow"></i>
              </span>
            </Link>
            <ul className="dropdown">
              <li>
                <Link to={""}>Play Station Plus</Link>
              </li>
              <li>
                <Link to={""}>Xbox Gold</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown-container_li_ps5">
            <Link to={"/juegos/filtro/true"}>Ofertas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DropDown;
