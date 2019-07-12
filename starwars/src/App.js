import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import { Segment } from 'semantic-ui-react';
import Loader from './components/Loader';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starwarsChar, setStarwarsCharacter] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get("https://swapi.co/api/people")
    .then(res => {
      setStarwarsCharacter(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Segment raised><CharacterList/></Segment>
    </div>
  );
}

export default App;
