import "../css/header.css";
import Logo from "../../public/assets/logo.webp";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header-container">
        <div className="main_header">
          <Link to={"/"}>
            <img src={Logo} alt="Logo de la Pagina" />
          </Link>
          <SearchBar></SearchBar>
          <CartIcon></CartIcon>
          <a href="#">
            <i className="fa-solid fa-right-to-bracket login"></i>
          </a>
        </div>
        <DropDown></DropDown>
      </header>
    </>
  );
}

export default Header;
