import stancLogo from "../../public/test.png";
// import stancLogo from "../../public/stanc-logo.png";
export default function Logo() {
  return (
    <div className="absolute md:left-34 left-6 top-10">
      <div className="w-9 h-9 rounded-full">
        <img src={stancLogo} alt="" />
      </div>
      {/* <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Logo
      </h1> */}
    </div>
  );
}
