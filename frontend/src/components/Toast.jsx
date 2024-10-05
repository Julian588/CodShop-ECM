import React, { useState, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function ToastMessage({ show, message, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);
  return (
    <ToastContainer
      className="p-3"
      style={{
        zIndex: 9999,
        position: "fixed",
        top: "20px",
      }}
    >
      <Toast
        show={show}
        onClose={onClose}
        style={{ height: "10rem", width: "50rem" }}
      >
        <Toast.Header
          closeButton={false}
          style={{
            fontSize: "2rem",
            backgroundColor: "var(--color-secundary)",
          }}
        >
          <strong className="me-auto">Notificación</strong>
          <small>Ahora</small>
        </Toast.Header>
        <Toast.Body style={{ fontSize: "1.5rem" }}>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastMessage;
