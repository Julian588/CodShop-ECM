import { createContext, useState, useMemo } from "react";
import productos from "../productos.json";

export const productsContext = createContext();

function ProductsProvider({ children }) {
  const products = productos;
  const [filters, setFilters] = useState({
    consola: "all",
    genero: "all",
    ofertas: false,
    query: "",
    search: false,
  });

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const filtrarJuegosNav = (productos, { consola, genero, ofertas }) => {
    return productos.filter((producto) => {
      const isOfertas = ofertas === "true";
      if (isOfertas) {
        return producto.oferta === isOfertas;
      } else {
        return (
          producto.consola.includes(consola) &&
          (producto.genero.includes(genero) || genero === "all") &&
          (!isOfertas || producto.oferta === true)
        );
      }
    });
  };

  const filtrarJuegosSearch = (productos, query) => {
    return productos.filter((producto) => {
      const productoGenero = producto.genero.toLowerCase();
      const productoNombre = producto.nombre.toLowerCase();
      const queryLowerCase = query.toLowerCase();
      return (
        productoGenero.includes(queryLowerCase) ||
        productoNombre.includes(queryLowerCase)
      );
    });
  };

  const filteredProducts = useMemo(() => {
    const { consola, genero, ofertas, query } = filters;
    if (filters.search) {
      return filtrarJuegosSearch(products, query);
    } else {
      return filtrarJuegosNav(products, { consola, genero, ofertas });
    }
  }, [products, filters]);

  return (
    <productsContext.Provider
      value={{
        products,
        filteredProducts,
        filters,
        updateFilters,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}

export default ProductsProvider;
