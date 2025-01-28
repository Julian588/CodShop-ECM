import { useState, useMemo } from "react";

function useProductFilters(games) {
  const [filters, setFilters] = useState({
    game_console: "all",
    game_gender: "all",
    is_offer: false,
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

  const filterParams = (games, { game_console, game_gender, is_offer }) => {
    return games.filter((game) => {
      const isOffer = is_offer === true;
      if (!isOffer) {
        return (
          (game.game_console.includes(game_console) ||
            game_console === "all") &&
          (game.game_gender.includes(game_gender) || game_gender === "all") &&
          game.precio < filters.maxPrice
        );
      } else {
        return (
          game.is_offer === isOffer &&
          (game.game_console.includes(game_console) ||
            game_console === "all") &&
          (game.game_gender.includes(game_gender) || game_gender === "all") &&
          game.precio < filters.maxPrice
        );
      }
    });
  };

  const filterSearch = (games, query) => {
    return games.filter((producto) => {
      const gameGender = producto.game_gender.toLowerCase();
      const gameName = producto.game_name.toLowerCase();
      const queryLowerCase = query.toLowerCase();
      return (
        gameGender.includes(queryLowerCase) || gameName.includes(queryLowerCase)
      );
    });
  };

  const filteredGames = useMemo(() => {
    const { game_console, game_gender, is_offer, query } = filters;
    if (filters.search) {
      return filterSearch(games, query);
    } else {
      return filterParams(games, { game_console, game_gender, is_offer });
    }
  }, [games, filters]);

  return {
    filteredGames,
    filters,
    updateFilters,
  };
}

export default useProductFilters;
