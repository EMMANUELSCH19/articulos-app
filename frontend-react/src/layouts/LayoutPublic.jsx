import React from 'react';
import Header from '../components/Header';
// import BackgroundArticle from '../components/BackgroundArticle';
// import ArticleContent from '../components/ArticleContent';
// import SocialMedia from '../components/SocialMedia';
import { Outlet } from 'react-router-dom';

function ArticleTemplate() {
  return (
    <div className='bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100'>
      <div className="container m-auto">

        <Header />

        <Outlet />
      </div>
    </div>
  );
}

export default ArticleTemplate;