/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import NavMain from "@/components/nav-main";
import Search from "@/components/search";
import Card from "@/components/card";
import CardFeatured from "@/components/card-featured";
import SearchPoke from "@/components/search-server";

export default function Home(

{
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  

  return (
    <div>
      <header>
        <NavMain />
      </header>
      <main>
        <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
          <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
            Gotta catch 'em all!
          </h1>
          <p className="text-center text-black text-xl">
            Discover, search and explore the amazing world of Pokémon. Find
            <br /> your favourite and learn about their stats.
          </p>
          <button className="btn-primary">
            <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
            Random Pokémon
          </button>
        </section>
        <SearchPoke searchParams={searchParams} />
        <Card />
      </main>
    </div>
  );
}
