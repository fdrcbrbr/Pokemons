
export default function CardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="w-full py-10 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#EFF5FD,_#F4E7FA)]">
      <h2 className="text-center text-4xl font-bold py-6 col-span-6">
        Featured Pokemon
      </h2>
      <section className="w-full flex flex-wrap gap-4 justify-center">
        {children}
      </section>
    </div>
  );
}


/* export default function CardWrapper({
  text,
  searchParams,
  children,
}: {
  text: string;
  searchParams?: { [key: string]: string | undefined };
  children: React.ReactNode;
}) {
  return (
    <div className="w-full py-10 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#EFF5FD,_#F4E7FA)]">
      <h2 className="text-center text-4xl font-bold py-6 col-span-6">
        {text}
      </h2>
      <section className="w-full flex flex-wrap gap-4 justify-center">
        {searchParams ? <FilteredPokemon /> : <FeaturedPokemon />}
        {children}
      </section>
    </div>
  );
} */