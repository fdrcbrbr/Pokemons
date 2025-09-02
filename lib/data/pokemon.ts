/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pokemon, PokemonShort } from "@/lib/data/intefaces";


export async function getPokemons(): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const pokemon = await response.json();

  return pokemon;
};


export async function getPokemonById(id: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }
  const pokemon: Pokemon = await response.json();
  return pokemon;
}

export async function fetchAllPokemonData(
  list: PokemonShort[]
): Promise<Pokemon[]> {
  const fetchPromises = list.map((item) => fetch(item.url));

  try {
    const responses = await Promise.all(fetchPromises);

    if (responses.some((res) => !res.ok)) {
      throw new Error("one or more requests failed");
    }

    const jsonPromises = responses.map((res) => res.json());
    return await Promise.all(jsonPromises);
  } catch (e) {
    console.error("error");
    return [];
  }
}