import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import StarWarsCard from './StarWarsCards';
import styled from "styled-components";

const Card_section = styled.div`
    disply: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2%;
    `

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response.data.results);
      setCards(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <Card_section>
          {cards.map((card, index) => {
            return <StarWarsCard name={card.name} gender={card.gender} height={card.height} mass={card.mass} eye_color={card.eye_color} hair_color={card.hair_color} key={index}/>
          })}
        </Card_section>
    </div>
  );
}

export default App;
