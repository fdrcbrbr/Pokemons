import { getPokemonById } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import { Pokemon } from "@/lib/data/intefaces";
import PokemonCard from "./card";


interface CardFeaturedProps {
  id?: string;
}

export default async function CardFeatured({ id }: CardFeaturedProps) {
  let pokemons: Pokemon[];

  if (id) {

    const pokemon = await getPokemonById(id);
    pokemons = [pokemon];
  } else {

    const featuredPokeIds: string[] = ["25", "6", "9", "3"];
    pokemons = await Promise.all(
      featuredPokeIds.map((id) => getPokemonById(id))
    );
  }

  return (
    <CardWrapper message={id ? "Featured Pokemon" : "Popular Pokemon"}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </CardWrapper>
  );
}
