import React from 'react';
import Header from '../components/Header';
// import BackgroundArticle from '../components/BackgroundArticle';
// import ArticleContent from '../components/ArticleContent';
// import SocialMedia from '../components/SocialMedia';
import { Outlet } from 'react-router-dom';

function ArticleTemplate() {
  return (
    <div>
      <Header />
      {/* acomodar el contenido de la pagina porque el header es fixed */}
      <div className=' mt-20'>
        <Outlet />
      </div>
    </div>
  );
}

export default ArticleTemplate;