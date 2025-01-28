import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="categories">
        <a href="#">Juegos PS5</a>
        <a href="#">Juegos PS4</a>
        <a href="#">Juegos Xbox</a>
        <a href="#">Membresias</a>
      </div>
      <div className="categories">
        <a href="#">
          <span>
            <i className="fa-brands fa-whatsapp"></i>
          </span>
          <p>3002584783</p>
        </a>
        <a href="#">
          <span>
            <i className="fa-regular fa-envelope"></i>
          </span>
          <p>some@gmail.com</p>
        </a>
      </div>
      <div class="categories redes__container">
        <h3>Redes Sociales</h3>
        <div>
          <a href="">
            <i class="fa-brands fa-instagram redes"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-square-facebook redes"></i>
          </a>
        </div>
        <h3>CEO @ElRoman</h3>
        <div>
          <a href="">
            <i class="fa-brands fa-instagram redes"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-tiktok redes"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
