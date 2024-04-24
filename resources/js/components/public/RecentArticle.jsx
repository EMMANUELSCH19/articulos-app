import React from "react";

function RecentArticle() {
  return (
    <article className="bg-slate-100 shadow-lg">
      <img src="https://www.hdwallpapers.in/download/sunset_sky_clouds_field_trees_horizon_4k_hd-HD.jpg" alt="Recent article" className="w-full h-48 object-cover rounded" />
      <div className="p-4">
        <h3 className="text-lg font-bold mt-2">Titulo del articulo reciente</h3>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero euismod, tincidunt arcu nec, ultricies lorem. Proin in dui eu sapien tristique fermentum.</p>
        {/* author */}
        <div className="flex items-center mt-4">
          <img src="https://th.bing.com/th/id/OIP.7Q4Z6H8BZj6R0VZV0B8cZQHaHa?pid=ImgDet&rs=1"
            alt="Author"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="ml-4">
            <span className="font-bold">Nombre del autor</span>
            <div className="flex text-sm">
              <span className="font-bold">Fecha:</span> &nbsp;
              <span className="text-gray-600">06/04/2024</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RecentArticle;