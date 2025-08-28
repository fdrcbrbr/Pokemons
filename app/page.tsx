
import NavMain from "@/components/nav-main";
import Search from "@/components/search";
import CardFeatured from "@/components/card-featured";
import Hero from "@/components/hero";

export default function Home({
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
        <Hero searchParams={searchParams}/>
        <Search />
        <CardFeatured />
      </main>
    </div>
  );
}
