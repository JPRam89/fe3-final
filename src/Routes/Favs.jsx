import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state, actualizarTema, data } = useContext(ContextGlobal);

  return (
    <main className={`${state.tema}`}>
      <h1>Dentists Favs</h1>
      <button onClick={actualizarTema}>Cambiar a {state.tema === 'light' ? 'dark' : 'light'}</button>
      <div className='card-grid'>
        {data.map(fav => (
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
