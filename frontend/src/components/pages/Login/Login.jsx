import useScrollToTop from "@hooks/useScrollToTop";
import { useId } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  useScrollToTop();
  const emailId = useId();
  const passwordId = useId();

  return (
    <section className="form-login-section">
      <div className="title-container">
        <h1 className="form-login-title">
          Bienvenido a <span>CodShop Games</span>
        </h1>
        <h2 className="form-login-title2">Inicia Sesión.</h2>
      </div>
      <form className="form-login">
        <div className="field-wrapper">
          <label htmlFor={emailId}>Correo Electrónico.</label>
          <input type="text" id={emailId} required />
        </div>

        <div className="field-wrapper">
          <label htmlFor={passwordId}>Contraseña.</label>
          <input type="password" id={passwordId} required />
        </div>
        <div className="btn-container">
          <button className="btn-iniciar btn">Iniciar Sesión</button>
          <Link to={"/register"} className="btn-registrarse btn">
            Registrarse
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
