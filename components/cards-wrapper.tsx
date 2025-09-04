interface CardWrapperProps {
  children: React.ReactNode;
  message?: string; // Prop opzionale per il titolo
}

export default function CardWrapper({
  children,
  message = "Featured Pokemon", // Valore di default
}: CardWrapperProps) {
  return (
    <div className="w-full py-10 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#EFF5FD,_#F4E7FA)]">
      <h2 className="text-center text-4xl font-bold py-6 col-span-6">
        {message}
      </h2>
      <section className="w-full flex flex-wrap gap-4 justify-center">
        {children}
      </section>
    </div>
  );
}