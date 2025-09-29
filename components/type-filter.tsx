
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllPokemonData, getPokemonShort } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import PokemonCard from "./card";
import Pagination from "./pagination";
import { PokemonShort, Pokemon } from "@/lib/data/intefaces";

export default function TypeFilter() {
  const searchParams = useSearchParams();
  const [paginatedPokemons, setPaginatedPokemons] = useState<Pokemon[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(
      "Current searchParams:",
      Object.fromEntries(searchParams.entries())
    );
    async function fetchData() {
      setIsLoading(true);

      const type = searchParams.get("type");
      const currentPage = searchParams.get("page")
        ? parseInt(searchParams.get("page")!)
        : 1;
      const currentLimit = searchParams.get("limit")
        ? parseInt(searchParams.get("limit")!)
        : 20;

      const pokemonListShort: PokemonShort[] = await getPokemonShort();
      const allPokemons = await getAllPokemonData(pokemonListShort);

      const filteredPokemons = allPokemons.filter((pokemon) => {
        if (type === "types") {
      return pokemon.types[0].type.name.toLowerCase();
    }
        return false;
      });

      const startIndex = (currentPage - 1) * currentLimit;
      const paginated = filteredPokemons.slice(
        startIndex,
        startIndex + currentLimit
      );

      setPaginatedPokemons(paginated);
      setTotalItems(filteredPokemons.length);
      setLimit(currentLimit);
      setPage(currentPage);
      setIsLoading(false);
    }

    fetchData();
  }, [searchParams]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <CardWrapper message="Your search:">
      {paginatedPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={limit}
        currentPage={page}
      />
    </CardWrapper>
  );
}
