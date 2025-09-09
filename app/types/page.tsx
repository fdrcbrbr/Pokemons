import NavMain from "@/components/nav-main";
import Footer from "@/components/footer";
import HeroTypes from "@/components/hero-types";
import CardSearched from "@/components/card-searched";


export default async function Types({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { type, page } = await searchParams;

  return (
    <div>
      <header>
        <NavMain />
      </header>
      <main>
        <HeroTypes />
          <CardSearched 
          query={type} 
          keyType="types" 
          page={page ? parseInt(page) : 1}
          limit={10}
          />
      </main>
      <Footer />
    </div>
  );
}
