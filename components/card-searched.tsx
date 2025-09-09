import { getAllPokemonData, getPokemonShort } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper-types";
import { PokemonShort } from "@/lib/data/intefaces";
import PokemonCard from "./card";
import Pagination from "./pagination";

interface CardSearchedProps {
  query?: string;
  keyType?: "name" | "types";
}


interface CardSearchedProps {
  query?: string;
  keyType?: "name" | "types";
  page?: number;
  limit?: number;
}

export default async function CardSearched({
  query,
  keyType,
  page = 1,
  limit = 20,
}: CardSearchedProps) {
  const pokemonListShort: PokemonShort[] = await getPokemonShort();
  const allPokemons = await getAllPokemonData(pokemonListShort);

  const filteredPokemons = allPokemons.filter((pokemon) => {
    if (keyType === "name" && query) {
      return pokemon.name.toLowerCase().includes(query.toLowerCase());
    } else if (keyType === "types" && query) {
      return pokemon.types[0].type.name.toLowerCase() === query.toLowerCase();
    }
    return false;
  });

  const startIndex = (page - 1) * limit;
  const paginatedPokemons = filteredPokemons.slice(
    startIndex,
    startIndex + limit
  );

  return (
    <CardWrapper>
      {paginatedPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
      <Pagination
        totalItems={filteredPokemons.length}
        itemsPerPage={limit}
        currentPage={page}
      />
    </CardWrapper>
  );
}
