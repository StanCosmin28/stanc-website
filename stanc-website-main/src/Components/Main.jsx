import Particles from "./Particles";
export default function Main({ children }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-0">
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
