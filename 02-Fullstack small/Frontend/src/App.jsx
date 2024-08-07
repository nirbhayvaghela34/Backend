import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Jokes from './components/Jokes';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  });

  return (
    <>
      <h2>Chai and Full stack</h2>
      <Jokes jokes={jokes} />
    </>
  )
}

export default App
