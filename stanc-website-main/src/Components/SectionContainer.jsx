export default function SectionContainer({ children }) {
  return (
    <div className="container mx-auto border-amber-200 border-1 max-w-screen-xl px-4 sm:mt-40 mt-20">
      {children}
    </div>
  );
}
