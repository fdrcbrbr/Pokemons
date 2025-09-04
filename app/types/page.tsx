/* eslint-disable @typescript-eslint/no-unused-vars */

import NavMain from "@/components/nav-main";
import Footer from "@/components/footer";
import HeroTypes from "@/components/hero-types";

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
      <HeroTypes/>
      </main>
      <Footer/>
    </div>
  );
}
