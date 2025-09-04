import React from "react";
import HeroWrapper from "./hero-wrapper";
import TypeButton from "@/components/types";

export default async function HeroTypes() {


  return (

    <HeroWrapper  title="Gotta catch 'em all!" message="Discover, 
        search and explore the amazing world of Pokémon. Find
        your favourite and learn about their stats.">
    <TypeButton/>
    </HeroWrapper>
  );
};
