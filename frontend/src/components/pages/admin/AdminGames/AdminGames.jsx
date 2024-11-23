import "./AdminGames.css";
import { useEffect, useState } from "react";
import Pagination from "@common/Pagination/Pagination";
import CardAdmin from "@common/admin/CardAdmin/CardAdmin";
import useScrollToTop from "@hooks/useScrollToTop";

function AdminGames({ filteredGames, filters }) {
  useScrollToTop();
  const [productsToShow, setProductsToShow] = useState([]);

  return (
    <div className="admin-products-section">
      <div className="products-container">
        {productsToShow.map((game) => {
          return <CardAdmin game={game} key={game._id}></CardAdmin>;
        })}
      </div>
      <Pagination
        ITEMS_PER_PAGE={9}
        filteredGames={filteredGames}
        filters={filters}
        setProductsToShow={setProductsToShow}
      />
    </div>
  );
}

export default AdminGames;
