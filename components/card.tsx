import Image from "next/image";
import { fetchPokemon } from "@/lib/data/pokemon";


export default async function Card(){

const pokemon = await fetchPokemon(1);
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <Image
       src={pokemon.pic} 
       alt={pokemon.name} 
       className="mx-auto" 
       width={150}
       height={150}
       />
       <p><strong>ID:</strong> {pokemon.id}</p>
       <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
      <p><strong></strong> {pokemon.types.join(", ")}</p>
      <p><strong>HP:</strong> {pokemon.HP}</p>
      <p><strong>Attacco:</strong> {pokemon.attack}</p>
      <p><strong>Difesa:</strong> {pokemon.defense}</p>
    </div>
  );
}


