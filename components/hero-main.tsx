
import RandomButton from "./random-button";
import CardSingle from "./card-single";
import React from "react";
import HeroWrapper from "./hero-wrapper";

interface HeroMainProps {
  random?: string;
}

export default async function HeroMain({ random }: HeroMainProps) {
  
  return (
    <HeroWrapper  title="Gotta catch 'em all!" message="Discover, 
      search and explore the amazing world of Pokémon. Find
      your favourite and learn about their stats.">
      <RandomButton />
      {random && <CardSingle id={random.toString()} />}:
    </HeroWrapper>
  );
};
