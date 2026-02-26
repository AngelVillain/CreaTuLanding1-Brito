import React from "react";

const ItemListContainer = ({ saluudo }) => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{saluudo}</h1>
      <p>Aquí próximamente se mostrará nuestro catálogo de productos.</p>
    </div>
  );
};

export default ItemListContainer;