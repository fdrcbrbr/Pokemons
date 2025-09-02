import Image from "next/image";
export default async function Footer() {

  
  return (
    <footer className="content-grid bg-black justify-items-center  py-10">
        <div className="flex gap-2 my-3 items-center">
          <Image
                src="/Logo.png"
                alt="Pokedex logo"
                width={50}
                height={50}
              />
          <h2 className="ml-2 text-3xl font-extrabold text-white">
            Pokédex
          </h2>
        </div>
        <div className="my-3">
          <p className="text-white">
            Explore the world of Pokémon</p>
        </div>
        <div className="flex my-3 gap-6">
          <Image
                src="/Facebook.svg"
                alt="Facebook logo"
                width={40}
                height={40}
              />
          <Image
                src="/Instagram.svg"
                alt="INstagram logo"
                width={40}
                height={40}
              />
        </div>
    </footer>
  );
};