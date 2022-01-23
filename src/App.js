import './App.css';
import React, {useState} from "react";

function App() {

  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/ability/{id or name}/")
      .then(response => {
        return response.json()
      })
      .then(pokemonRes => {
        setPokemon(pokemonRes);
      })
      .catch(error => console.log(error))
  }
  return (
    <div className="App">
      <h2>List of Pokemon</h2>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <table>
        <thead>
          <tr>
            <th>Pokemon Names</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map((eachPokemon) => {
              return (
                <tr key={eachPokemon.name}>
                  <td>{eachPokemon.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
