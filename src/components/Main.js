import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data);
    });
  }, []);
  console.log(movies);
  return <div>Main</div>;
};

export default Main;
