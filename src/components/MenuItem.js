import React from "react";
function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> price:{price} </p>
      <button>Add to cart</button>
    </div>
  );
}


export default MenuItem;
