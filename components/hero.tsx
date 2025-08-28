/* eslint-disable react/no-unescaped-entities */
import { Suspense } from "react";
import RandomButton from "./random-button";
import CardSingle from "./card";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
      <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
        Gotta catch 'em all!
      </h1>
      <p className="text-center text-black text-xl">
        Discover, search and explore the amazing world of Pokémon. Find
        <br /> your favourite and learn about their stats.
      </p>
      <RandomButton/>
      <Suspense
          key={random}
          fallback={
            <div className="animate-pulse w-58 h-65 bg-neutral-400/70 border rounded border-neutral-400 p-4">
              Loading...
            </div>
          }
        >
          <CardSingle id={Number(random)} />
        </Suspense>
    </section>
  );
}
