//https://pokeapi.co/api/v2/pokemon/bulbasaur

import { PokemonDetails } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
  console.log(formatPokemonName(name));
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`
  );
  if (!response.ok) {
    throw new Error("Failed to fectch pokemons");
  }

  const result = response.json();
  const data = await result;
  const pokemon = {
    name: data.name,
    id: data.id,
    imgSrc: data.sprites.front_default,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
  };
  return pokemon;
}
