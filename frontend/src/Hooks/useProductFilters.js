import { useState, useMemo } from "react";

function useProductFilters(products) {
  const [filters, setFilters] = useState({
    consola: "all",
    genero: "all",
    oferta: false,
    query: "",
    search: false,
    maxPrice: 100.0,
  });

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const filterParams = (products, { consola, genero, oferta }) => {
    return products.filter((producto) => {
      const isOferta = oferta === true;
      if (!isOferta) {
        return (
          (producto.consola.includes(consola) || consola === "all") &&
          (producto.genero.includes(genero) || genero === "all") &&
          (producto.precio || producto.precioOferta) < filters.maxPrice
        );
      } else {
        return (
          producto.oferta === isOferta &&
          (producto.consola.includes(consola) || consola === "all") &&
          (producto.genero.includes(genero) || genero === "all") &&
          (producto.precio || producto.precioOferta) < filters.maxPrice
        );
      }
    });
  };

  const filterSearch = (products, query) => {
    return products.filter((producto) => {
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
    const { consola, genero, oferta, query } = filters;
    if (filters.search) {
      return filterSearch(products, query);
    } else {
      return filterParams(products, { consola, genero, oferta });
    }
  }, [products, filters]);

  return {
    filteredProducts,
    filters,
    updateFilters,
  };
}

export default useProductFilters;
