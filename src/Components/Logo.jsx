import stancLogo from "../../public/stanc-logo.png";
export default function Logo() {
  return (
    <div className="absolute top-6 md:left-36 left-6 items-center">
      <div className="w-10 h-10 bg-blue-500 rounded-full">
        <img src={stancLogo} alt="" />
      </div>
      {/* <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Logo
      </h1> */}
    </div>
  );
}
