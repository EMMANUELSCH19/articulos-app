import React from "react";

function TrendingArticle() {
  return (
    <article className="bg-slate-300 h-full rounded overflow-hidden">
      <div className="relative h-full">
        <img
          className="w-full h-full object-cover"
          src="https://th.bing.com/th/id/R.364831d897c50953bd815935e3b758e9?rik=bYipyEFuid%2bu%2fQ&pid=ImgRaw&r=0"
          alt="Trending article"
        />
        <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl">
          Destacado
        </span>
        {/* contenido dentro de la card */}
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/85 from-50% w-full text-white">
          {/* categoria */}
          <span className="text-xs bg-purple-500/50 text-white px-2 py-1 font-bold rounded-full">
            Deportes
          </span>
          <h3 className="text-lg font-bold mt-3">Titulo del articulo</h3>
          <div className="flex mt-2">
            {/* autor y fecha */}
            <div className="flex items-center text-xs">
              <img
                className="w-8 h-8 object-cover rounded-full"
                src="https://th.bing.com/th/id/OIP.7Q4Z6H8BZj6R0VZV0B8cZQHaHa?pid=ImgDet&rs=1"
                alt="Autor"
              />
              <span className="ml-2">Autor</span>
            </div>
            <div className="ml-auto text-xs">
              <span className="font-bold">Fecha:</span> <span>05/04/2024</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TrendingArticle;
