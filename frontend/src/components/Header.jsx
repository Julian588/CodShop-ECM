import "../css/header.css";
import Logo from "../../public/assets/logo.webp";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  const isLogin = pathname === "/login" ? true : false;

  return (
    <>
      <header className="header-container">
        <div className="main_header">
          <Link to={"/"}>
            <img src={Logo} alt="Logo de la Pagina" />
          </Link>
          <SearchBar></SearchBar>
          <div className="icon-wrapper">
            <CartIcon></CartIcon>
            <Link to={"/login"} style={{ display: isLogin ? "none" : "block" }}>
              <i className="fa-solid fa-right-to-bracket login"></i>
            </Link>
          </div>
        </div>
        <DropDown></DropDown>
      </header>
    </>
  );
}

export default Header;
