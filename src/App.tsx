import "./App.css";

import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",

      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
      name: "charmander",

      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },

    {
      name: "squirtle",

      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },

    {
      name: "pikachu",

      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },

    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <section>
      <h1>
        <PokemonCard
          imgSrc={pokemonList[pokemonIndex].imgSrc}
          name={pokemonList[pokemonIndex].name}
        />
      </h1>
      <NavBar
        index={pokemonIndex}
        setIndex={setPokemonIndex}
        list={pokemonList}
      />
    </section>
  );
}

export default App;
