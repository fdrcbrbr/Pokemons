import React from 'react';
import TypeBadge from '@/components/type-badge';
import Image from 'next/image';
import {Pokemon} from '@/lib/data/intefaces';

interface PokemonCardProps {
    pokemon: Pokemon;
}



export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="bg-teal-50 p-4 rounded-lg shadow-md w-60 flex flex-col justify-center cursor-pointer transition-all hover:scale-102 border-indigo-400 border-6">
            <div className={`relative my-6 w-30 h-30 rounded-full overflow-hidden mx-auto border-4 cborder-${pokemon.types[0].type.name}`}>
                <Image
                              src={pokemon.sprites.front_default}
                              alt={pokemon.name}
                              className="mx-auto"
                              width={200}
                              height={200}
                            />
            </div>
            <h2 className="text-2xl font-bold text-center pb-1">{pokemon.name}</h2>
            <div className="flex flex-row gap-1 justify-center">
                {pokemon.types.map((t) => <TypeBadge key={t.type.name} name={t.type.name} url={t.type.url} />)}
            </div>
            <div className="flex flex-col gap-2 mt-4">
                {pokemon.stats.slice(0, 3).map((stat) => (
                    <div key={stat.stat.name} className="flex justify-between items-center w-full">
                        <p className='font-bold'>{stat.stat.name}</p>
                        <p className='font-bold'>{stat.base_stat}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}