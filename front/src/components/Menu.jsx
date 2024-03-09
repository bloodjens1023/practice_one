import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/Navbar-With-Button-icons.css";
import "../assets/css/pikaday.min.css";
import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <nav
      className="navbar navbar-expand-lg portfolio-navbar"
      style={{ backgroundColor: "#153330", flex: 1 ,display:"flex", alignItems:"center", justifyContent:"center"}}

    >
      <div className="" >
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
              <div className="col colaps">
                
                  
                  <li>
                    <NavLink to="/acceuil" style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#ffffff",
                  }}>Home</NavLink>
                  </li>
               
              </div>
              <div className="col colaps">
                
                  <NavLink to="/about" style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#ffffff",
                  }}>About</NavLink>
               
              </div>
              <div className="col colaps">
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
              <div className="col colaps">
                
                  <NavLink to="/vente" style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#ffffff",
                  }}>Store</NavLink>
                
              </div>
              <div className="col colaps">
                  <NavLink to="/info"  style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#ffffff",
                  }}>Infofako</NavLink>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
