import BlurText from "./BlurText";
import CTAButton from "./CTAButton";
// import ThemeToggle from "./ThemeToggle";
export default function Header() {
  // const handleAnimationComplete = () => {
  //   console.log("Animation completed!");
  // };
  return (
    <>
      {/* <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
      /> */}
      <header className="bricolage-grotesque-regular text-white  md:pt-55 pt-35 relative">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Building Digital Products, Brands, and Experiences
          </h1> */}
          <BlurText
            text="Building Digital Products, Brands, and Experiences!"
            delay={100}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-4"
          />

          {/* <div className="mt-4 w-24 mx-auto border-b-4 border-green-700"></div> */}

          <h2 className="text-lg sm:text-xl md:text-2xl font-thin opacity-60 md:px-10 sm:px-20">
            As a Full-Stack Developer, I create fast, scalable, and
            high-performing websites that deliver real impact! 🚀
            {/* Let’s turn your ideas into powerful digital experiences! 🚀 */}
          </h2>
          <div className="flex justify-center space-x-4 mt-8">
            <CTAButton cta={"My Resume"} />
            <CTAButton cta={"Book a Call"} />
          </div>
          {/* <a
            href="#contact"
            className="bricolage-grotesque-regular mt-8 inline-block px-6 py-3 text-lg bg-[#1db106] text-white rounded-full hover:bg-[#1db1067a] transition duration-300"
          >
            Let's Work Together
          </a> */}
        </div>
        {/* <ThemeToggle /> */}
      </header>
    </>
  );
}
