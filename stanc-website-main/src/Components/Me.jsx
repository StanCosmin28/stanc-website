import stanc from "../assets/me.png";
export default function Me() {
  return (
    <div className="absolute items-center top-10 md:right-34 right-6 flex ">
      <div className="w-10 h-10 rounded-full relative flex items-center justify-center ">
        <img src={stanc} alt="" />
      </div>
      {/* display my name on hover or a hey! message */}
    </div>
  );
}
