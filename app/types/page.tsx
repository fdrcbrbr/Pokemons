
import NavMain from "@/components/nav-main";
import Search from "@/components/search";
import CardFeatured from "@/components/card-featured";
import HeroTypes from "@/components/hero-main";
import Footer from "@/components/footer";

export default function Types({
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
      
      </main>
      <Footer/>
    </div>
  );
}
