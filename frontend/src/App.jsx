import Header from "@common/Header/Header";
import Footer from "@common/Footer/Footer";
import ProductsProvider from "./Context/productsContext";
import CartProvider from "./context/cartContext";
import AppRouter from "@routes/AppRouter";
import { useLocation } from "react-router-dom";
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "sonner";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes("/admin/dashboard");

  return (
    <ProductsProvider>
      <Toaster />
      <CartProvider>
        {!isAdminRoute && <Header />}
        <main>
          <AppRouter />
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
