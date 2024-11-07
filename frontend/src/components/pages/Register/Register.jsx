import "./Register.css";
import { useId } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [nameId, lastNameId, phoneId, emailId, passwordId, verifyPasswordId] =
    useId();

  return (
    <section className="form-register-section">
      <div className="title-container">
        <h1 className="form-login-title">Regístrate.</h1>
        <h2 className="form-login-title2">Digíta los siguientes datos.</h2>
      </div>
      <form className="form-register">
        <div className="section-wrapper">
          <div className="field-wrapper">
            <label htmlFor={nameId}>Primer Nombre</label>
            <input type="text" id={nameId} />
          </div>
          <div className="field-wrapper">
            <label htmlFor={lastNameId}>Apellidos</label>
            <input type="text" id={lastNameId} />
          </div>
        </div>
        <div className="section-wrapper">
          <div className="field-wrapper">
            <label htmlFor={phoneId}>Teléfono</label>
            <input type="text" id={phoneId} />
          </div>
          <div className="field-wrapper">
            <label htmlFor={emailId}>Correo Electrónico</label>
            <input type="text" id={emailId} />
          </div>
        </div>
        <div className="section-wrapper">
          <div className="field-wrapper">
            <label htmlFor={passwordId}>Contraseña</label>
            <input type="text" id={passwordId} />
          </div>
          <div className="field-wrapper">
            <label htmlFor={verifyPasswordId}>Confirmar Contraseña</label>
            <input type="text" id={verifyPasswordId} />
          </div>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">
            Registrarse
          </button>
          <Link to={"/login"} className="btn">
            Iniciar Sesión
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
