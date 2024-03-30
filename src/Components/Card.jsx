import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ id }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUserData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const addFav = () => {
    if (userData) {
      const favs = JSON.parse(localStorage.getItem("favs")) || [];
      favs.push(userData);
      localStorage.setItem("favs", JSON.stringify(favs));
    }
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt={userData.name} />

      <h2>{userData.name}</h2>
      <p>Username: {userData.username}</p>
      <p>ID: {userData.id}</p>

      <Link to={`/details/${userData.id}`}>Detalles</Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
