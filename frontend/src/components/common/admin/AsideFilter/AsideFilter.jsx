import "./AsideFilter.css";

function AsideFilter({
  filterQuery,
  setFilterQuery,
  setFilterGenero,
  setFilterConsola,
  setFilterPrice,
  filterPrice,
  handleOnSubmit,
  handleIsOferta,
}) {
  return (
    <aside className="aside-container">
      <search>
        <form className="search-container" onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="buscar"
            placeholder="Buscar producto..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
          <button className="btn-buscar" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </search>
      <form className="filter-container-options">
        <h2>Filtrar por:</h2>
        <div className="value-wrapper genero">
          <label htmlFor="genero">Género:</label>
          <select
            name="genero"
            onChange={(e) => setFilterGenero(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="Accion">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="Terror">Terror</option>
            <option value="Deportes">Deportes</option>
            <option value="RPG">RPG</option>
            <option value="Plataformas">Plataformas</option>
            <option value="Lucha">Lucha</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Carrera">Carrera</option>
            <option value="Puzzle">Simulación</option>
          </select>
        </div>
        <div className="value-wrapper consola">
          <label htmlFor="consola">Consola:</label>
          <select
            name="consola"
            onChange={(e) => setFilterConsola(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="PS5">Play Station 5</option>
            <option value="PS4">Play Station 4</option>
            <option value="Xbox">Xbox</option>
          </select>
        </div>
        <div className="value-wrapper oferta">
          <label htmlFor="oferta">Oferta:</label>
          <input type="checkbox" name="oferta" onChange={handleIsOferta} />
        </div>
        <div className="value-wrapper">
          <label htmlFor="precio">Precio</label>
          <input
            type="range"
            name="precio"
            min={0}
            max={99}
            onChange={(e) => setFilterPrice(e.target.value)}
          />
          <span>${filterPrice}</span>
        </div>
      </form>
    </aside>
  );
}

export default AsideFilter;
