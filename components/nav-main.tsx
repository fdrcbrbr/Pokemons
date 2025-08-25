import Link from "next/link";
import data from "@/lib/pages.json";
import Image from "next/image";

export default function NavMain(){
    return(
        <header className="flex justify-between items-center px-12 py-4">
  <Link href="/" className="flex items-center">
    <Image
      src="/Logo.png"
      alt="Pokedex logo"
      width={60}
      height={60}
    />
    <p className="ml-2 text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
      POKEDEX
    </p>
  </Link>

  <nav>
    <ul className="flex space-x-6">
      {data["pages"].map((link, index) => (
        <li key={index}>
          <Link
            className="text-black border-white/10 font-medium hover:text-gray-300"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</header>
    );
}