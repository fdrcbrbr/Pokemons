import { getAllPokemonData, getPokemonById, getPokemonShort } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import {Pokemon, PokemonShort} from "@/lib/data/intefaces";
import Search from "@/components/search";
import Link from "next/link";
import { Suspense } from "react";

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
  const allPokemons = pokemonListShort.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <CardWrapper>
      {featuredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon}/>
      ))}
    </CardWrapper>
  );
}