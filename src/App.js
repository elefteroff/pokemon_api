import './App.css';
import React, {useState} from "react";

function App() {

  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json()
      )
      .then(jsonRes => {
        setPokemon(jsonRes.results);
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <h2>List of Pokemon</h2>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <hr />
      {/* {JSON.stringify(pokemon)} */}
      <table>
        <thead>
          <tr>
            <th>Pokemon Names</th>
          </tr>
        </thead>
        <tbody>
        {
          pokemon.map((p, idx) => {
            return (
              <tr key={idx}>
                <td>{p.name}</td>
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
