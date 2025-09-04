
import NavMain from "@/components/nav-main";
import Search from "@/components/search";
import CardFeatured from "@/components/card-featured";
import HeroMain from "@/components/hero-main";
import Footer from "@/components/footer";
import CardSearched from "@/components/card-searched";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { query, random  } = await searchParams;

  return (
    <div>
      <header>
        <NavMain />
      </header>
      <main>
        <HeroMain random={random} />
        <Search />
        {query ? (
          <CardSearched query={query} />
        ) : (
          <CardFeatured />
        )}
      </main>
      <Footer />
    </div>
  );
}
