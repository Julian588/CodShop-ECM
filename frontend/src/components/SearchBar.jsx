import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/juegos/search?q=${query}`);
    } else {
      navigate(`/juegos/search`);
    }
  };

  return (
    <form className="input__container" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Buscar..."
        className="buscador"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button type="submit" className="button-search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default SearchBar;
