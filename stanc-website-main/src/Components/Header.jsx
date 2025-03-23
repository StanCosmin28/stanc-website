import BlurText from "./BlurText";
import CTAButton from "./CTAButton";
export default function Header() {
  return (
    <>
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
            className="text-3xl mb-4"
          />

          <h2 className="text-lg sm:text-xl md:text-2xl font-thin opacity-60 md:px-10 sm:px-20 max-w-screen-md">
            As a Software Developer, I create fast, scalable, and
            high-performing websites that deliver real impact! 🚀
            {/* Let’s turn your ideas into powerful digital experiences! 🚀 */}
          </h2>
          <div className="flex justify-center space-x-4 mt-8">
            <CTAButton cta={"My Resume"} />
            <CTAButton cta={"Book a Call"} />
          </div>
        </div>
      </header>
    </>
  );
}
