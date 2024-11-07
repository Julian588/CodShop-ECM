import "./AdminGames.css";
import { useEffect, useState } from "react";
import Pagination from "@layout/admin/AdminPagination/AdminPagination";
import CardAdmin from "@common/admin/CardAdmin/CardAdmin";

function AdminGames({ filteredProducts, filters }) {
  const ITEMS_PER_PAGE = 9;
  const [productsToShow, setProductsToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const firstIndex = currentPage * ITEMS_PER_PAGE;
    setProductsToShow(
      [...filteredProducts].slice(firstIndex, firstIndex + ITEMS_PER_PAGE)
    );
  }, [filteredProducts, currentPage]);

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
    const totalProducts = filteredProducts.length;
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
    <div className="admin-products-section">
      <Pagination
        currentPage={currentPage}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      ></Pagination>
      <div className="products-container">
        {productsToShow.map((product) => {
          return <CardAdmin product={product} key={product.id}></CardAdmin>;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      ></Pagination>
    </div>
  );
}

export default AdminGames;
