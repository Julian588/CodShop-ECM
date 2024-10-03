import Banner from "./Banner";
import SliderJuegos from "./SliderJuegos";
import useProducts from "./Hooks/useProducts";
import "../css/main.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  const { products } = useProducts();

  const filtrarOfertas = (products) => {
    return products.filter((product) => product.oferta === true);
  };
  const productosEnOferta = filtrarOfertas(products);

  return (
    <section className="main-banner">
      <Banner></Banner>
      <SliderJuegos
        sectionTitle={"OFEERTAS"}
        productos={productosEnOferta}
        id={1}
      ></SliderJuegos>
      <SliderJuegos
        sectionTitle={"NOVEDADES"}
        productos={products}
        id={2}
      ></SliderJuegos>
      <SliderJuegos
        sectionTitle={"DESTACADOS"}
        productos={products}
        id={3}
      ></SliderJuegos>
    </section>
  );
}

export default Home;
