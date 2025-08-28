/* eslint-disable @typescript-eslint/no-unused-vars */
import Search from "@/components/search";
import { Pokemon } from "@/lib/data/intefaces";
import { PokemonShort } from "@/lib/data/intefaces";
import {fetchAllPokemonData} from "@/lib/data/pokemon"


export default async function SearchPoke({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { query = "" } = await searchParams;
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");

  const { results }: { results: PokemonShort[] } = await response.json();
  // console.log(results);

  //find first only
  const singlePokemon = results.find((p) => p.name.includes(query));
  //console.log(singlePokemon);

  //find all
  const allPokemons = results.filter((p) => p.name.includes(query));
  //console.log(allPokemons);

  const allPokemonData =
    query !== "" ? await fetchAllPokemonData(allPokemons) : [];

  console.log(allPokemonData);

  return (
    <div>
      <Search placeholder="Search for pokemon" />
    </div>
  );
}