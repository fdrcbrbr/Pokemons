/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pokemon, PokemonShort } from "@/lib/data/intefaces";
import { TypeBadgeProps } from "@/lib/data/intefaces";
import { PokemonTypeList } from "@/lib/data/intefaces";

export async function getPokemonShort(): Promise<PokemonShort[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1025`);
  const data = await response.json();
  return data.results;
}

export async function getPokemonById(id: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }
  const pokemon: Pokemon = await response.json();
  return pokemon;
}

export async function getAllPokemonData(
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
    console.error("error fetching pokemons");
    return [];
  }
}

export async function getPokemonTypes(): Promise<PokemonTypeList[]> {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon types");
    }
    const data = await response.json();
    const types = data.results.map((type: TypeBadgeProps) => ({
      type: { name: type.name, url: type.url },
    }));
    return types;
  } catch (error) {
    console.error("Error fetching Pokémon types:", error);
    return [];
  }
}

export function getPokemonKey(condition?: "name" | "types"): string {
  return condition === "name" ? "pokemon.name" : "pokemon.types[0]";
}
