import React from "react";

function CategoryCard({key ,category}) {
  return (
    <div className="btn" key={key}>
			<p className="text-purple-600 text-lg md:text-xl font-semibold">{category}</p>
		</div>
	);
}

export default CategoryCard;