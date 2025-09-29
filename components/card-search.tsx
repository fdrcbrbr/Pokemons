import { getAllPokemonData, getPokemonShort } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import { PokemonShort } from "@/lib/data/intefaces";
import PokemonCard from "./card";
import Pagination from "./pagination";

  interface CardSearchedProps {
  query?: string;
  page?: number;
  limit?: number;
}

export default async function CardSearch({
  query,
  page = 1,
  limit = 20,
}: CardSearchedProps) {
  const pokemonListShort: PokemonShort[] = await getPokemonShort();
  const allPokemons = await getAllPokemonData(pokemonListShort);

  const filteredPokemons = allPokemons.filter((pokemon) => {
    if (query) {
      return pokemon.name.toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });

  const startIndex = (page - 1) * limit;
  const paginatedPokemons = filteredPokemons.slice(startIndex, startIndex + limit);

  return (
    <CardWrapper message="Your result:">
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
