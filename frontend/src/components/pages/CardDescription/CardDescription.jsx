import "./CardDescription.css";
import FormComprar from "@layout/FormComprar/FormComprar";
import SliderJuegos from "@layout/SliderJuegos/SliderJuegos";
import useScrollToTop from "@hooks/useScrollToTop";
import usePorcentage from "@hooks/usePorcentage";
import useProducts from "@hooks/useProducts";
import { useParams } from "react-router-dom";

function CardDescription() {
  useScrollToTop();
  const { products } = useProducts();

  const { id } = useParams();

  const productoARenderizar = products.find((producto) => id === producto.id);
  const procentajeOferta = usePorcentage(
    productoARenderizar.precio,
    productoARenderizar.precioOferta
  );

  return (
    <>
      <section className="description-container">
        <div className="card-description-container">
          <figure className="caratula-container">
            <div className="caratula">
              <img
                src={productoARenderizar.caratula}
                alt={`Caratula de la imagen ${productoARenderizar.nombre}`}
              />
              {productoARenderizar.oferta ? (
                <>
                  <span>{procentajeOferta}</span>
                </>
              ) : (
                <></>
              )}
            </div>
            <h2>Descripción</h2>
            <p>{productoARenderizar.descripcion}</p>
          </figure>
          <div className="comprar-container">
            <h1 className="juego-titulo">{productoARenderizar.nombre}</h1>
            {productoARenderizar.oferta ? (
              <>
                <div className="price-container">
                  <span
                    className="card-price-org"
                    style={{
                      textDecoration: "line-through",
                      fontSize: "3rem",
                    }}
                  >
                    {"$" + productoARenderizar.precio}
                  </span>
                  <span
                    className="card-price-ofe"
                    style={{ fontSize: "3.2rem" }}
                  >
                    {"$" + productoARenderizar.precioOferta}
                  </span>
                </div>
              </>
            ) : (
              <span
                className="card-price-org"
                style={{ fontSize: "3rem", color: "var(--color-quartery)" }}
              >
                {"$" + productoARenderizar.precio}
              </span>
            )}
            <div className="form-container">
              <FormComprar
                producto={productoARenderizar}
                showAdd={true}
              ></FormComprar>
            </div>
            <div className="licencia-primaria">
              <h3>Licencia Primaria</h3>
              <p>
                El juego queda en tu consola y juegas desde tu perfil. Puedes
                jugar con/o sin conexión a internet
              </p>
            </div>
            <div className="licencia-secundaria">
              <h3>Licencia Secundaria</h3>
              <p>
                El juego queda en tu consola y juegas desde el perfil asignado.
                Para jugar requiere conexión a internet
              </p>
            </div>
            <div className="datos">
              <strong className="idioma">
                Idioma
                <span></span>
              </strong>
              <strong className="peso">
                Peso
                <span></span>
              </strong>
              <p className="garantia">
                Incluye Guia Paso a Paso <br />
                Entrega en minutos
              </p>
            </div>
          </div>
        </div>
        <SliderJuegos
          productos={products}
          id={4}
          sectionTitle="MAS JUEGOS"
        ></SliderJuegos>
      </section>
    </>
  );
}

export default CardDescription;
