export default function CTAButton({ cta }) {
  return (
    <div className="flex justify-center">
      <a
        href="#contact"
        className="inline-block px-10 py-2 text-lg font-medium text-white border-1 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 bg-[rgba(20,20,20)] hover:bg-[rgba(40,40,40)]"
      >
        {cta}
      </a>
    </div>
  );
}
