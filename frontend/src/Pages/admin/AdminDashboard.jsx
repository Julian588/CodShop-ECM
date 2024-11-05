import "../../CSS/admin/adminDashboard.css";
import Products from "../../productos.json";
import Logo from "/public/logo.webp";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductFilters from "../../Hooks/useProductFilters";
import AsideFilter from "../../Components/admin/AsideFilter";
import ProductSection from "../../Components/admin/ProductSection";
import AddProductForm from "../../Components/admin/AddProductForm";

function AdminDashboard() {
  //#region Product filter - Lógica necesaria para crear el filtrado del producto.
  const { filteredProducts, updateFilters } = useProductFilters(Products);
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
      consola: filterConsola,
      genero: filterGenero,
      maxPrice: filterPrice,
      oferta: filterOferta,
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
        <Routes>
          <Route
            path="/"
            element={
              <ProductSection
                filteredProducts={filteredProducts}
                filters={filters}
              />
            }
          />
          <Route path="/add" element={<AddProductForm />} />
        </Routes>
      </section>
    </>
  );
}

export default AdminDashboard;
