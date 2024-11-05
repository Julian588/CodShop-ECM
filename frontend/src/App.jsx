import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import HomeFiltered from "./Pages/HomeFiltered";
import CardDescription from "./Pages/CardDescription";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductsProvider from "./Context/productsContext";
import CartProvider from "./context/cartContext";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes("/admin/dashboard");

  console.log(location);
  return (
    <ProductsProvider>
      <CartProvider>
        {!isAdminRoute && <Header />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/juegos/filtro/:consola/:genero/"
              element={<HomeFiltered />}
            />
            <Route path="/juegos/filtro/:ofertas" element={<HomeFiltered />} />
            <Route path="/juegos/search" element={<HomeFiltered />} />
            <Route path="/juegos/:id" element={<CardDescription />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
        {!isAdminRoute && (
          <a href="#" className="wpp-btn">
            <img src="/public/whatsapp.svg" alt="Whatsapp Icono Link" />
          </a>
        )}
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
