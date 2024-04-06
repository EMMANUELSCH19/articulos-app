import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import SearchArticles from '../components/SearchArticles'
import CategoryCard from '../components/CategoryCard';
import TrendingArticle from '../components/TrendingArticle';
import RecentArticle from '../components/RecentArticle';
import InterestingArticle from '../components/InterestingArticle';
import ArticleAds from '../components/ArticleAds';

const defaultCategories = [
  { id: 1, name: 'Deportes' },
  { id: 2, name: 'Espectáculos' },
  { id: 3, name: 'Tecnología' },
  { id: 4, name: 'Salud' },
  { id: 5, name: 'Economía' },
  { id: 6, name: 'Política' },
];

function Home() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center py-4'>Bienvenido a mi blog</h1>

      <Header />

      <main className='container m-auto px-4 xl:p-0'>


        <Banner />

        <SearchArticles />

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {defaultCategories.map((category) => (
              <CategoryCard category={category.name} key={category.id} />
            ))}
          </div>
        </div>

        {/* SLIDER DE ARTICULOS MAS VISTOS */}

        <div className="">
          <h2 className="text-2xl font-bold">Artículos más populares</h2>
          <div className='grid gap-2 xl:grid-cols-2 md:gap-4'>
            <div className="w-full">
              <TrendingArticle size='large' />
            </div>
            <div className="grid w-full gap-2 md:gap-4">
              <div className="grid md:grid-cols-2 w-full gap-2 md:gap-4">
                <TrendingArticle size='small' />
                <TrendingArticle size='small' />
              </div>
              <div className="md:hidden xl:block">
                <TrendingArticle size='medium' />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <RecentArticle />
          </div>
          <div className="">
            <div className="">
              <p>Podria Interesarte</p>
              <div className="">
                <InterestingArticle />
              </div>
            </div>

            <div className="">
              <p>Anuncios</p>
              <div className="">
                <ArticleAds />
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;