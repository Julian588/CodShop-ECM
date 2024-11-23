import "./adminDashboard.css";
import Products from "../../../../productos.json";
import Logo from "/public/logo.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductFilters from "@hooks/useProductFilters";
import AsideFilter from "@common/admin/AsideFilter/AsideFilter";
import AdminRouter from "@routes/admin/AdminRouter";
import { useGameStore } from "@store/game";

function AdminDashboard() {
  //#region Product filter - Lógica necesaria para crear el filtrado del producto.
  const { fetchGames, games } = useGameStore();
  const { filteredGames, updateFilters } = useProductFilters(games);
  const [filterGenero, setFilterGenero] = useState("all");
  const [filterConsola, setFilterConsola] = useState("all");
  const [filterPrice, setFilterPrice] = useState(99);
  const [filterOferta, setFilterOferta] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const filters = {
    filterGenero: filterGenero,
    filterConsola: filterConsola,
    filterPrice: filterPrice,
    filterOferta: filterOferta,
    filterQuery: filterQuery,
  };

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);
  console.log(games);

  const handleIsOferta = (e) => {
    setFilterOferta(e.target.checked ? true : false);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    updateFilters({
      query: filterQuery,
      search: true,
    });
  };

  useEffect(() => {
    updateFilters({
      game_console: filterConsola,
      game_gender: filterGenero,
      is_offer: filterOferta,
      maxPrice: filterPrice,
      search: false,
    });
  }, [filterGenero, filterConsola, filterPrice, filterOferta]);
  //#endregion

  return (
    <>
      <header className="admin-header">
        <nav className="admin-main_header">
          <Link to={"/"} className="admin-header-logo">
            <img src={Logo} alt="Logo de la pagina" />
          </Link>
          <ul className="admin-main_header-ul">
            <li className="li-catalogo">
              <Link to={"/admin/dashboard"}>Catalogo Juegos</Link>
            </li>
            <li className="li-registrar_juego">
              <Link to={"/admin/dashboard/add"}>Registrar Juego</Link>
            </li>
            <li className="li-administrar_usuarios">
              <Link>Administrar Usuarios</Link>
            </li>
          </ul>
          <button className="btn-logout">
            Cerrar Sesión<i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </nav>
      </header>
      <section className="main-container">
        <AsideFilter
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          setFilterGenero={setFilterGenero}
          setFilterConsola={setFilterConsola}
          setFilterPrice={setFilterPrice}
          filterPrice={filterPrice}
          handleOnSubmit={handleOnSubmit}
          handleIsOferta={handleIsOferta}
        />
        <AdminRouter filteredGames={games} filters={filters} />
      </section>
    </>
  );
}

export default AdminDashboard;
