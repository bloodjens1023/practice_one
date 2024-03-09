import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/Navbar-With-Button-icons.css";
import "../assets/css/pikaday.min.css";
import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <nav
      className="navbar navbar-expand-lg portfolio-navbar"
      style={{ backgroundColor: "#153330", flex: 1 }}
    >
      <div className="container">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav-1"
          className="navbar-toggler"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <div className="row">
              <div className="col">
                <li
                  className="nav-link active"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#ffffff",
                  }}
                >
                  {" "}
                  <li>
                    <NavLink to="/acceuil">Home</NavLink>
                  </li>
                </li>
              </div>
              <div className="col">
                <li
                  className="nav-link"
                  href="hire-me.html"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#ffffff",
                  }}
                >
                  <NavLink to="/about">About</NavLink>
                </li>
              </div>
              <div className="col">
                <NavLink to="/profil">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      background: "#ffffff",
                      borderRadius: "50%",
                    }}
                  ></div>
                </NavLink>
              </div>
              <div className="col">
                <a
                  className="nav-link active"
                  href="#"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#ffffff",
                  }}
                >
                  <NavLink to="/vente">Store</NavLink>
                </a>
              </div>
              <div className="col">
                <li
                  className="nav-link active"
                  href="#"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#ffffff",
                  }}
                >
                  <NavLink to="/info">Infofako</NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
