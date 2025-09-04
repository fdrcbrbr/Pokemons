import { getAllPokemonData, getPokemonShort } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import {PokemonShort} from "@/lib/data/intefaces";
import PokemonCard from "./card";

interface CardSearchedProps {
  query?: string;
}

export default async function CardSearched({ query }: CardSearchedProps){

  //Fetch the list with general Pokemon info
  const pokemonListShort: PokemonShort[]= await getPokemonShort();

  //Confronting poke list with search
  const searchedPokemons = pokemonListShort.filter((p) =>
  p.name.toLowerCase().includes(query?.toLowerCase() || "")
  );

  //Search the corresponding Pokemon with all the infos
  const allPokemons = await getAllPokemonData(searchedPokemons)

  return (
    <CardWrapper message="Your search...">
      {allPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon}/>
      ))}
    </CardWrapper>
  );
}