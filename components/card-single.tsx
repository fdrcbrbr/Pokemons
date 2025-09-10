import { getPokemonById } from "@/lib/data/pokemon-rest";
import { Pokemon } from "@/lib/data/intefaces";
import PokemonCard from "@/components/card";

interface CardSingleProps {
  id: string;
}

export default async function CardSingle({ id }: CardSingleProps) {
  const pokemon: Pokemon = await getPokemonById(id);
  return <PokemonCard pokemon={pokemon} />;
}
