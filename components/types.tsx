"use client";

import { PokemonTypeList } from "@/lib/data/intefaces";
import { getPokemonTypes } from "@/lib/data/pokemon-rest";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TypeBadgeXL } from "./type-badge";
import { useEffect, useState } from "react";

export default function TypeButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [typesList, setTypesList] = useState<PokemonTypeList[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const types = await getPokemonTypes();
      setTypesList(types);
    };
    fetchTypes();
  }, []);

  const handleClick = (typeName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", typeName);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-center">
      {typesList.map((t) => (
        <button
          key={t.type.name}
          onClick={() => handleClick(t.type.name)}
          className="p-4 text-lg min-w-[120px] rounded-lg"
        >
          <TypeBadgeXL name={t.type.name} url={t.type.url} />
        </button>
      ))}
    </div>
  );
}
