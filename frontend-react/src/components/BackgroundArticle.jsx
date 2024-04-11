import React from "react";

function BackgroundArticle() {
	return (
		<div className="xl:w-8/12 m-auto">
			<div className="relative">
				<img
					src="https://wallpaperaccess.com/full/2441907.jpg"
					alt="imagen de fondo"
					className="w-full h-42 md:h-80 object-cover"
				/>
				<div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black/70 from-50% text-white">

					<div className="h-4/5 bg-red-5000 flex justify-center items-center">
						<h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-center px-4 xl:px-10">
							toReversed, toSpliced, toSorted y with. Nuevos métodos de Array en JavaScript explicados.
						</h1>
					</div>

					<div className="bg-green-5000 h-auto flex justify-evenly items-center px-4 text-sm md:text-lg">
						<div className="flex items-center">
							<img
								src="https://th.bing.com/th/id/OIP.7Q4Z6H8BZj6R0VZV0B8cZQHaHa?pid=ImgDet&rs=1"
								alt="Autor"
								className="w-8 h-8 object-cover rounded-full"
							/>
							<span className="ml-2 font-semibold">Autor</span>
						</div>
						<div className="">
							<span className="">Fecha:</span> <span className="font-semibold ">05/04/2024</span>
						</div>
						{/* categoria */}
						<span className="bg-purple-500/50 text-white px-2 py-1 font-bold rounded-full">
							Deportes
						</span>
					</div>

				</div>
			</div>
		</div>
	);
}

export default BackgroundArticle;
