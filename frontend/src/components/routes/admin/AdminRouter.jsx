import AdminAddGames from "@pages/admin/AdminGames/AdminGames";
import AddProductForm from "@pages/admin/AdminAddGame/AdminAddGame";
import { Route, Routes } from "react-router-dom";

function AdminRouter({ filteredGames, filters }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminAddGames filteredGames={filteredGames} filters={filters} />
        }
      />
      <Route path="/add" element={<AddProductForm />} />
    </Routes>
  );
}

export default AdminRouter;
