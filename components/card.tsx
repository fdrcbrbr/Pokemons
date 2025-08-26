import Image from "next/image";
import { getPokemonById } from "@/lib/data/pokemon";


export default async function Card(){

const pokemon = await getPokemonById(1);
  return (
    <div className="w-40 h-50 p-4 border rounded-lg shadow-lg bg-white">
      <div className="w-25 h-25 rounded-full overflow-hidden border-2 border-gray-500">
      <Image
       src={pokemon.pic} 
       alt={pokemon.name} 
       className="mx-auto" 
       width={200}
       height={200}
       />
       </div>
       <p><strong>ID:</strong> {pokemon.id}</p>
       <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
      <p><strong></strong> {pokemon.types.join(" ")}</p>
      <p><strong>HP:</strong> {pokemon.HP}</p>
      <p><strong>Attack:</strong> {pokemon.attack}</p>
      <p><strong>Defense:</strong> {pokemon.defense}</p>
    </div>
  );
}


