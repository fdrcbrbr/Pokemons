import { getAllPokemonData, getPokemonShort } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import { PokemonShort } from "@/lib/data/intefaces";
import PokemonCard from "./card";

interface CardSearchedProps {
  query?: string;
  keyType?: "name" | "types";
}

export default async function CardSearched({
  query,
  keyType,
}: CardSearchedProps) {
  // Ottieni la lista completa dei Pokémon (con tutti i dati, inclusi i tipi)
  const pokemonListShort: PokemonShort[] = await getPokemonShort();
  const allPokemons = await getAllPokemonData(pokemonListShort);

  // Filtra allPokemons in base a keyType
  const filteredPokemons = allPokemons.filter((pokemon) => {
    if (keyType === "name" && query) {
      return pokemon.name.toLowerCase().includes(query.toLowerCase()); // Filtra per nome
    } else if (keyType === "types" && query) {
      return pokemon.types[0].type.name.toLowerCase() === query.toLowerCase(); // Filtra per primo tipo
    }
    return false;
  });

  return (
    <CardWrapper message="Your search...">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </CardWrapper>
  );
}
