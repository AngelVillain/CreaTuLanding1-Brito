import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <h2>MiTienda</h2>
      </div>

      <ul style={styles.links}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#111",
    color: "white"
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "20px"
  },
  logo: {
    fontWeight: "bold"
  }
};

export default NavBar;