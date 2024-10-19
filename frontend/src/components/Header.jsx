import "../css/header.css";
import Logo from "../../public/assets/logo.webp";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const { pathname } = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const isLogin = pathname === "/login" ? true : false;

  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <header
        className="header-container lg"
        style={!showCart ? { overflow: "hidden" } : { overflow: "visible" }}
      >
        <div className="main_header">
          <Link to={"/"}>
            <img src={Logo} alt="Logo de la Pagina" />
          </Link>
          <SearchBar></SearchBar>
          <div className="icon-wrapper">
            <CartIcon showCart={showCart} onClick={handleShowCart}></CartIcon>
            <Link to={"/login"} style={{ display: isLogin ? "none" : "block" }}>
              <i className="fa-solid fa-right-to-bracket login"></i>
            </Link>
          </div>
        </div>
        <DropDown isSm={false}></DropDown>
      </header>

      <header
        className="header-container sm"
        style={!showCart ? { overflow: "hidden" } : { overflow: "visible" }}
      >
        <div className="main_header">
          <Link to={"/"}>
            <img src={Logo} alt="Logo de la Pagina" />
          </Link>
          <button className="btn-menu" onClick={handleOnClick}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <CartIcon showCart={showCart} onClick={handleShowCart}></CartIcon>
        </div>
        <div
          className="sm-div"
          style={showMenu ? { display: "flex" } : { display: "none" }}
        >
          <Link
            className="login-sm"
            to={"/login"}
            style={{ display: isLogin ? "none" : "flex" }}
          >
            <span> Iniciar Sesión</span>
            <i className="fa-solid fa-right-to-bracket"></i>
          </Link>
          <SearchBar></SearchBar>
          <DropDown isSm={true}></DropDown>
        </div>
      </header>
    </>
  );
}

export default Header;
