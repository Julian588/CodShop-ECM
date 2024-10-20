import Card from "../Components/Card";
import useScrollToTop from "../Hooks/useScrollToTop";
import useProducts from "../Hooks/useProducts";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../CSS/homefiltered.css";

function HomeFiltered() {
  useScrollToTop();

  const { filteredProducts, updateFilters } = useProducts();
  const { consola, genero, ofertas } = useParams();

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    if (searchQuery) {
      updateFilters({ query: searchQuery.toLowerCase(), search: true });
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery) {
      updateFilters({ consola, genero, ofertas, search: false });
    }
  }, [consola, genero, ofertas]);

  const containerStyles =
    filteredProducts.length > 0 ? "filter-container" : "filter-container empty";

  return (
    <section className={containerStyles}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((producto) => {
          return <Card producto={producto} key={producto.id} />;
        })
      ) : (
        <h1>No hay productos</h1>
      )}
    </section>
  );
}

export default HomeFiltered;
