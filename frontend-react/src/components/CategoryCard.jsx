import React from "react";

function CategoryCard({key ,category}) {
  return (
    <div className="bg-purple-500/30 rounded text-center py-2" key={key}>
			<p className="text-purple-600 text-lg md:text-xl font-semibold">{category}</p>
		</div>
	);
}

export default CategoryCard;