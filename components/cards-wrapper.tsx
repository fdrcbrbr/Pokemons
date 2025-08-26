
export default function CardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-grid py-6">
      <h2 className="text-center text-4xl font-bold">Featured Pokemon</h2>
      <section>{children}</section>
    </div>
  );
}