import { getPokemonById } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import { Pokemon } from "@/lib/data/intefaces";
import PokemonCard from "./card";

export default async function CardFeatured() {
  //Hard coded featured most famous pokemon
  const featuredPokeIds: string[] = ["25", "6", "9", "3"];
  const featuredPokemons: Pokemon[] = await Promise.all(
    featuredPokeIds.map((id) => getPokemonById(id))
  );

  return (
    <CardWrapper message="Featured Pokemon">
      {featuredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </CardWrapper>
  );
}
