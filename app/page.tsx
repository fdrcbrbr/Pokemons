/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import NavMain from "@/components/nav-main";
import Search from "@/components/search";
import Card from "@/components/card";
import CardFeatured from "@/components/card-featured";
import SearchPoke from "@/components/search-server";
import Hero from "@/components/hero";

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
        <Hero/>
        <SearchPoke searchParams={searchParams} />
        <CardFeatured />
      </main>
    </div>
  );
}
