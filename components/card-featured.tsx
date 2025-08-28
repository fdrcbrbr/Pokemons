import Image from "next/image";
import { getPokemonById } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import { getColorFromType, capitalize  } from "@/lib/util";
import {getFeatured} from "@/lib/data/featured";
import {Pokemon} from "@/lib/data/intefaces";

export default async function CardFeatured(){
  const featuredPokeIds: number[] = getFeatured();
  const featuredPokemons: Pokemon[] = await Promise.all(
  featuredPokeIds.map((id) => getPokemonById(id))
);

  return (
    <CardWrapper>
      {featuredPokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="w-60 h-94 rounded-xl bg-blue-50 border-4 border-[#637cce] shadow-lg flex flex-col items-center p-2"
        >
          <div
            className={`w-32 h-32 rounded-full border-4 ${getColorFromType("border-",
              pokemon.type[0]
            )} flex items-center justify-center mt-4`}
          >
            <Image
              src={pokemon.pic}
              alt={pokemon.name}
              className="mx-auto"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-2 text-center">
            <p
              className={`inline-block px-2 text-gray-600 text-sm rounded-full mt-2 ${getColorFromType("bg-",
                pokemon.type[0]
              )}`}
            >
              #{pokemon.id}
            </p>
            <h2 className="text-2xl font-bold text-gray-800">
              {capitalize(pokemon.name)}
            </h2>
            <div className="flex flex-wrap gap-2">
              {pokemon.type.map((type, index) => (
                <span
                  key={index}
                  className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mt-2 ${getColorFromType('bg-', type)}`}>
                  {capitalize(type)}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 w-full">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-semibold">HP</span>
              <span className="font-semibold">{pokemon.hp}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-semibold">Attack</span>
              <span className="font-semibold">{pokemon.attack}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-semibold">Defense</span>
              <span className="font-semibold">{pokemon.defense}</span>
            </div>
          </div>
        </div>
      ))}
    </CardWrapper>
  );
}