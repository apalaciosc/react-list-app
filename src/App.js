import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './components/loader';
import Items from './components/items';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({})
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?sort_by=title.desc&api_key=${accessToken}`;

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const apiData = await axios.get(apiUrl);

        setData(apiData.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      {loading ? <Loader /> : <Items data={data} /> }
    </div>
  );
}

export default App;
