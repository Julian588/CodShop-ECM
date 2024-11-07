import ProductSection from "@pages/admin/AdminGames/AdminGames";
import AddProductForm from "@pages/admin/AdminAddGame/AdminAddGame";
import { Route, Routes } from "react-router-dom";

function AdminRouter({ filteredProducts, filters }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProductSection
            filteredProducts={filteredProducts}
            filters={filters}
          />
        }
      />
      <Route path="/add" element={<AddProductForm />} />
    </Routes>
  );
}

export default AdminRouter;
