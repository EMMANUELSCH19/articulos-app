import React from "react";
import Banner from "../components/public/Banner";
import SearchArticles from "../components/public/SearchArticles";
import CardCategory from "../components/public/CardCategory";
import TrendingArticle from "../components/public/TrendingArticle";
import RecentArticle from "../components/public/RecentArticle";
import InterestingArticle from "../components/public/InterestingArticle";
import AdsArticle from "../components/public/AdsArticle";

const defaultCategories = [
  { id: 1, name: 'Deportes' },
  { id: 2, name: 'Espectáculos' },
  { id: 3, name: 'Tecnología' },
  { id: 4, name: 'Salud' },
  { id: 5, name: 'Economía' },
  { id: 6, name: 'Política' },
];

function HomePage() {
  return (
    <div className=''>
      <main className='container m-auto px-4 xl:p-0'>


        <Banner />

        <SearchArticles />

        <div className='mt-4'>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {defaultCategories.map((category) => (
              <CardCategory category={category.name} key={category.id} id={category.id} />
            ))}
          </div>
        </div>

        {/* SLIDER DE ARTICULOS MAS VISTOS */}

        <div className="mt-4">
          <h2 className="text-2xl font-bold">Artículos más populares</h2>
          <div className='grid gap-2 xl:grid-cols-2 md:gap-4 mt-4'>
            <div className="w-full">
              <TrendingArticle />
            </div>
            <div className="grid w-full gap-2 md:gap-4">
              <div className="grid md:grid-cols-2 w-full gap-2 md:gap-4">
                <TrendingArticle />
                <TrendingArticle />
              </div>
              <div className="md:hidden xl:block">
                <TrendingArticle />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 lg:flex lg:gap-4">
          <div className="lg:w-2/3">
            <h2 className='text-2xl font-bold'>Artículos Recientes</h2>
            <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-2 gap-4">
              <RecentArticle />
              <RecentArticle />
              <RecentArticle />
              <RecentArticle />
              <RecentArticle />
              <RecentArticle />
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:w-1/3">
            <div className="">
              <h3 className='text-2xl font-bold bg-black text-white'>Podria Interesarte</h3>
              <div className="mt-4 grid gap-4">
                <InterestingArticle />
                <InterestingArticle />
                <InterestingArticle />
              </div>
            </div>

            <div className="mt-4">
              <p className='text-2xl font-bold bg-black text-white'>Anuncios</p>
              <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-1 gap-4">
                <AdsArticle />
                <AdsArticle />
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default HomePage;