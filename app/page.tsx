
import NavMain from "@/components/nav-main";
import Search from "@/components/search";
import CardFeatured from "@/components/card-featured";
import HeroMain from "@/components/hero-main";
import Footer from "@/components/footer";
import CardSearched from "@/components/card-searched";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const hasSearchQuery = !!searchParams?.q;
  const heroSearchParams = {
    random: searchParams.random?.toString() || "",
  };
  const cardSearchParams = {
    q: searchParams.q?.toString() || "",
  };

  return (
    <div>
      <header>
        <NavMain />
      </header>
      <main>
        <HeroMain searchParams={heroSearchParams} />
        <Search />
        {hasSearchQuery ? (
          <CardSearched searchParams={cardSearchParams} />
        ) : (
          <CardFeatured />
        )}
      </main>
      <Footer />
    </div>
  );
}
