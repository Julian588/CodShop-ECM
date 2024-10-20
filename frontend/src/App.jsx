import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import HomeFiltered from "./Pages/HomeFiltered";
import CardDescription from "./Pages/CardDescription";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import ProductsProvider from "./Context/productsContext";
import CartProvider from "./Context/cartContext";
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
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
