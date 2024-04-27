import React from "react";

function CardCategory({ id, category }) {
  return (
    <div className="btn" id={id}>
      <p className="text-purple-600 text-lg md:text-xl font-semibold">{category}</p>
    </div>
  );
}

export default CardCategory;