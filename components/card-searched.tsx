import { getAllPokemonData, getPokemonShort } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import {PokemonShort} from "@/lib/data/intefaces";
import PokemonCard from "./card";


export default async function CardSearched({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {

  //Fetch the list with general Pokemon info
  const pokemonListShort: PokemonShort[]= await getPokemonShort();
  //String for params listening
  const { query = ""} = await searchParams;
  //Confronting poke list with search
  const searchedPokemons = pokemonListShort.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  const allPokemons = await getAllPokemonData(searchedPokemons)

  return (
    <CardWrapper>
      {allPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon}/>
      ))}
    </CardWrapper>
  );
}