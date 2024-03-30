import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { state, actualizarTema } = useContext(ContextGlobal); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <main className={`${state.tema}`}>
      <h1>Home</h1>
      <button onClick={actualizarTema}>Cambiar a {state.tema === 'light' ? 'dark' : 'light'}</button>
      <div className='card-grid'>
        {users.map(user => (
          <Card key={user.id} name={user.name} username={user.username} id={user.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
