import React from 'react'; 
import CategoryCard from '../components/CategoryCard';

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
      {/* HEADER */}
      
      <main className='container m-auto px-10'>
        

        {/* BANNER  */}

        {/* CATEGORIAS
        - Buscador
        - Lista de categorias
      */}
        
        <div>
        {/* <SearchArticles /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {defaultCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
              ))}
          </div>
        </div>

        {/* SLIDER DE ARTICULOS MAS VISTOS */}

        {/* ARTICULOS EN TENDENCIA DE LOS ULTIMOS 15 DIAS */}

        {/* ARTICULOS RECIENTES */}

        {/* PODRIA INTERESARTE */}

        {/* ANUNCIOS */}
      </main>
    </div>
  );
}

export default Home;