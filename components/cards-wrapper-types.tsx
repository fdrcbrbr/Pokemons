interface CardWrapperProps {
  children: React.ReactNode;
  message?: string;
}

export default function CardWrapper({
  children,
  message = "",
}: CardWrapperProps) {
  return (
    <div className="py-10 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#EFF5FD,_#F4E7FA)]">
      <h2 className="text-center text-4xl font-bold py-6 col-span-6">
        {message}
      </h2>
      <div className="flex justify-center">
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-4">
          {children}
        </section>
      </div>
    </div>
  );
}

