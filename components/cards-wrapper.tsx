
export default function CardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full py-6">
      <h2 className="text-center text-4xl font-bold py-6 col-span-6">
        Featured Pokemon
      </h2>
      <section className="w-full flex flex-wrap gap-4 justify-center">
        {children}
      </section>
    </div>
  );
}