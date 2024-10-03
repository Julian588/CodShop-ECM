import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HomeFiltered from "./components/HomeFiltered";
import CardDescription from "./components/CardDescription";
import { Routes, Route } from "react-router-dom";
import ProductsProvider from "./components/context/productsContext";
import CartProvider from "./components/context/cartContext";
import "swiper/css/bundle";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/juegos/filtro/:consola/:genero/"
              element={<HomeFiltered />}
            ></Route>
            <Route
              path="/juegos/filtro/:ofertas"
              element={<HomeFiltered />}
            ></Route>
            <Route path="/juegos/search" element={<HomeFiltered />}></Route>
            <Route path="/juegos/:id" element={<CardDescription />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
        <a href="#" className="wpp-btn">
          <img src="/assets/whatsapp.svg" alt="Whatsapp Icono Link" />
        </a>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
