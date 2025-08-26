import Image from "next/image";
import { getPokemonById } from "@/lib/data/pokemon";
import CardWrapper from "@/components/cards-wrapper";
import { getColorFromType  } from "@/lib/util";


export default async function Card(){
const pokemon = await getPokemonById(1);

  return (
    <CardWrapper>
      <div className="w-64 h-96 rounded-xl bg-blue-50 shadow-lg flex flex-col items-center p-4">
        <div className="w-32 h-32 rounded-full border-4 border-yellow-400 flex items-center justify-center mt-4">
          <Image
            src={pokemon.pic}
            alt={pokemon.name}
            className="mx-auto"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-2 text-center">
          <p className="text-gray-600 text-sm">#{pokemon.id}</p>
          <h2 className="text-2xl font-bold text-gray-800">{pokemon.name}</h2>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full mt-2">
            {pokemon.type}
          </span>
        </div>
        <div className="mt-6 w-full">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">HP</span>
            <span className="font-semibold">{pokemon.hp}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Attack</span>
            <span className="font-semibold">{pokemon.attack}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Defense</span>
            <span className="font-semibold">{pokemon.defense}</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}