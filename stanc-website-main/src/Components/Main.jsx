import Particles from "./Particles";
export default function Main({ children }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* <Aurora
          //   colorStops={["#00d8ff", "#7cff67", "#00d8ff"]}
          // #048aa1 #1db106
          colorStops={["#048aa1", "#1db106", "#048aa1"]}
          blend={0.7}
          amplitude={0.5}
          speed={0.5}
        /> */}
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {children}
    </>
  );
}
