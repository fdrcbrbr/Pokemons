import NavMain from "@/components/nav-main";
import CardFeatured from "@/components/card-featured";
import HeroPokedex from "@/components/hero-main";
import Footer from "@/components/footer";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { random } = await searchParams;

  return (
    <div>
      <header>
        <NavMain />
      </header>
      <main>
        <HeroPokedex/>
        <CardFeatured />
      </main>
      <Footer />
    </div>
  );
}