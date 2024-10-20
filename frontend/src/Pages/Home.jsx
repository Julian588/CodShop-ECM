import Banner from "../Components/Banner";
import SliderJuegos from "../Components/SliderJuegos";
import useProducts from "../Hooks/useProducts";
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
    <>
      <Banner></Banner>
      <div className="main-banner">
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
      </div>
    </>
  );
}

export default Home;
