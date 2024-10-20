import { Link } from "react-router-dom";

function DropDown({ isSm }) {
  return (
    <>
      {!isSm ? (
        //#region
        <nav className="dropdown-container">
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
                    <Link to={"/juegos/filtro/PS5/Plataformas"}>
                      Plataformas
                    </Link>
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
      ) : (
        //#endregion
        <nav className="nav-container-sm">
          <Link to={"/juegos/filtro/PS5/all"} className="ul-title">
            PS5
          </Link>
          <ul className="nav-ul ul-ps5">
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Accion"}>
                Accion
              </Link>
            </li>
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Aventura"}>
                Aventura
              </Link>
            </li>

            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Terror"}>
                Terror
              </Link>
            </li>
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Deportes"}>
                Deportes
              </Link>
            </li>

            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/RPG"}>
                RPG
              </Link>
            </li>
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Plataformas"}>
                Plataformas
              </Link>
            </li>

            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Lucha"}>
                Lucha
              </Link>
            </li>
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Puzzle"}>
                Puzzle
              </Link>
            </li>

            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Carreras"}>
                Carreras
              </Link>
            </li>
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS5/Simulacion"}>
                Simulacion
              </Link>
            </li>
          </ul>
          <Link to={"/juegos/filtro/PS4/all"} className="ul-title">
            PS4
          </Link>
          <ul className="nav-ul ul-ps4">
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS4/Accion"}>
                Accion
              </Link>
            </li>
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS4/Aventura"}>
                Aventura
              </Link>
            </li>

            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS4/Terror"}>
                Terror
              </Link>
            </li>
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS4/Deportes"}>
                Deportes
              </Link>
            </li>

            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS4/RPG"}>
                RPG
              </Link>
            </li>
            <li>
              <Link
                className="nav-ul-li"
                to={"/juegos/filtro/PS4/Mundo-Abierto"}
              >
                Mundo Abierto
              </Link>
            </li>

            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS4/Lucha"}>
                Lucha
              </Link>
            </li>
            <li>
              <Link
                className="nav-ul-li"
                to={"/juegos/filtro/PS4/Mundo-Abierto"}
              >
                Mundo Abierto
              </Link>
            </li>

            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS4/Carreras"}>
                Carreras
              </Link>
            </li>
            <li>
              <Link className="nav-ul-li" to={"/juegos/filtro/PS4/Simulacion"}>
                Simulacion
              </Link>
            </li>
          </ul>
          <Link className="ul-title">Membresías</Link>
          <ul className="nav-ul ul-mem">
            <li>
              <Link className="nav-ul-li">PlayStation Plus</Link>
            </li>
            <li>
              <Link className="nav-ul-li">Xbox Gold</Link>
            </li>
          </ul>
          <Link to={"/juegos/filtro/true"} className="ul-title">
            Ofertas
          </Link>
        </nav>
      )}
    </>
  );
}

export default DropDown;
