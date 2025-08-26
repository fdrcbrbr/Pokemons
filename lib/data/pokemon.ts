import { Pokemon } from "@/lib/data/intefaces";
import { PokemonApiResponse } from "@/lib/data/intefaces";

export async function getPokemons(): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const data: PokemonApiResponse = await response.json();

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    pic: data.sprites.front_default,
    type: data.types.map((type) => type.type.name),
    hp: data.stats.find((stat) => stat.stat.name === "hp")!.base_stat,
    attack: data.stats.find((stat) => stat.stat.name === "attack")!.base_stat,
    defense: data.stats.find((stat) => stat.stat.name === "defense")!.base_stat,
  };
  return pokemon;
};

export async function getPokemonById(id: number): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: PokemonApiResponse = await response.json();

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    pic: data.sprites.front_default,
    type: data.types.map((type) => type.type.name),
    hp: data.stats.find((stat) => stat.stat.name === "hp")!.base_stat,
    attack: data.stats.find((stat) => stat.stat.name === "attack")!.base_stat,
    defense: data.stats.find((stat) => stat.stat.name === "defense")!.base_stat,
  };
  return pokemon;
};

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const firstResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data: PokemonApiResponse = await firstResponse.json();
   

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    pic: data.sprites.front_default,
    type: data.types.map((type) => type.type.name),
    hp: data.stats.find((stat) => stat.stat.name === "hp")!.base_stat,
    attack: data.stats.find((stat) => stat.stat.name === "attack")!.base_stat,
    defense: data.stats.find((stat) => stat.stat.name === "defense")!.base_stat,
  };
  return pokemon;
};