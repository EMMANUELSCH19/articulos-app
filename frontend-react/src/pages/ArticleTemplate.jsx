import React from 'react';
import Header from '../components/Header';
import BackgroundArticle from '../components/BackgroundArticle';
import ArticleContent from '../components/ArticleContent';
import SocialMedia from '../components/SocialMedia';

function ArticleTemplate() {
	return (
		<div className='bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 '>

			<Header />

			<main className=''>
				<BackgroundArticle />
				<div className="flex flex-col xl:flex-row">
					<div className="hidden xl:block xl:w-2/12">
						Anuncios
					</div>
					<div className="xl:w-8/12">
						<ArticleContent />

						<div className="">
							<p className='text-center'>
								Comparte este artículo:
							</p>

							<div className="flex justify-center space-x-4 p-4">

								<SocialMedia name="Facebook" />
								<SocialMedia name="Twitter" />
								<SocialMedia name="Linkedin" />

							</div>
						</div>
					</div>
					<div className="hidden xl:block xl:w-2/12">
						Anuncios
					</div>
				</div>

			</main>

		</div>
	);
}

export default ArticleTemplate;