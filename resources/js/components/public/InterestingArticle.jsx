import React from "react";

function InterestingArticle() {
  return (
    <article className="bg-slate-100 shadow-lg flex">
      <img src="https://images.hdqwalls.com/wallpapers/waterfall-rocks-4k-ch.jpg" alt=""
        className="w-2/5 md:h-36 lg:h-24 object-cover"
      />
      <div className="p-2 w-3/5 flex flex-col justify-center">
        <h3 className="text-lg font-bold">Titulo del articulo</h3>
      </div>

    </article>
  );
}

export default InterestingArticle;