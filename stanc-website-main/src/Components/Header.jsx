export default function Header() {
  return (
    // <div className="z-0 flex justify-center items-center mt-24">
    //   <h1>Hey, Stan here!</h1>
    // </div>
    <header class=" text-white py-10 pt-55">
      <div class="container mx-auto max-w-screen-md px-4 text-center ">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          {/* Building Scalable & Impactful Web Solutions. */}
          Building Digital Products, Brands, and Experiences
        </h1>

        <div class="mt-4 w-24 mx-auto border-b-4 border-green-700"></div>

        <h2 class="mt-6 text-lg sm:text-xl md:text-2xl font-thin opacity-60">
          As a Full-Stack Developer, I create fast, scalable, and
          high-performing websites that deliver real impact. Let’s turn your
          ideas into powerful digital experiences!🚀
        </h2>

        <a
          href="#contact"
          class="mt-8 inline-block px-6 py-3 text-lg bg-green-700 text-white rounded-full hover:bg-red-600 transition duration-300"
        >
          Let's Work Together
        </a>
      </div>
    </header>
  );
}
