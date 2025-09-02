"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RandomButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleRandomClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    

    const maxPokemonId = 1001;
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    params.set("random", randomId.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: false });

  };
  return (
    <div>
      <button
        className="btn-primary"
        onClick={handleRandomClick}
      >
        <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
                Random Pokémon
      </button>
    </div>
  );
}