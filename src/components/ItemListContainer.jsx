import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{greeting}</h1>
      <p>Aquí próximamente se mostrará nuestro catálogo de productos.</p>
    </div>
  );
};

export default ItemListContainer;