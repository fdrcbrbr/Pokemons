import NavMain from "@/components/nav-main";
import Footer from "@/components/footer";
import HeroTypes from "@/components/hero-types";
import TypeFilter from "@/components/card-search";

export default async function Types({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <HeroTypes />
        <TypeFilter />
      </main>
      <Footer />
    </div>
  );
}
