import "./Pagination.css";
import { useEffect, useState } from "react";

function Pagination({
  ITEMS_PER_PAGE,
  filteredGames,
  filters,
  setProductsToShow,
}) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const firstIndex = currentPage * ITEMS_PER_PAGE;
    setProductsToShow(
      [...filteredGames].slice(firstIndex, firstIndex + ITEMS_PER_PAGE)
    );
  }, [filteredGames, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [
    filters.filterGenero,
    filters.filterConsola,
    filters.filterPrice,
    filters.filterOferta,
    filters.filterQuery,
  ]);

  const handleClickNext = () => {
    const totalProducts = filteredGames.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;

    if (firstIndex >= totalProducts) return;

    setCurrentPage(nextPage);
  };

  const handleClickPrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    setCurrentPage(prevPage);
  };

  return (
    <div className="pagination-container">
      <button type="button" className="prev-btn btn" onClick={handleClickPrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <span className="pagination">{`${currentPage + 1}`}</span>
      <button type="button" className="next-btn btn" onClick={handleClickNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
