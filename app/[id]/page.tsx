import NavMain from "@/components/nav-main";
import Search from "@/components/search";
import CardFeatured from "@/components/card-featured";
import HeroMain from "@/components/hero-main";
import Footer from "@/components/footer";

export default async function HomeWithId({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { random, id } = await searchParams;

  return (
    <div>
      <header>
        <NavMain />
      </header>
      <main>
        <HeroMain random={random} />
        <Search />
          <CardFeatured id={id}/>
      </main>
      <Footer />
    </div>
  );
}

/* import { notFound } from "next/navigation";
import Image from "next/image";

export default async function getPostById({params} : {params: {id: number}}){
    const { id } = await params;

    const response = await fetch(`https://futuramaapi.com/api/characters/${id}`);
    const data = await response.json();

    if(!data){
        return notFound();
    }else{
    return(
        <div className="p-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <li key={data.id} className="border p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h1 className="text-lg font-semibold">{data.name}</h1>
                <p className="text-gray-600">{data.species}</p>
                <div className="w-full h-48 overflow-hidden rounded">
                    <Image
                      src={data.image!}
                      alt={data.name}
                      width={180}
                      height={180}
                      className="w-full h-full object-contain"
                    />
                </div>
              </li>

          </ul>
        </div>
    );
}}; */