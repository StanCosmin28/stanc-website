// import stanc from "../assets/me.png";
import stanc from "../assets/profile-me.png";
// import stanc from "../assets/final_smallsizee.png";
export default function Me() {
  return (
    <div className="absolute items-center top-10 md:right-34 right-6 flex ">
      <div className="w-11 h-11 rounded-full relative flex items-center justify-center ">
        <img src={stanc} alt="" />
      </div>
      {/* display my name on hover or a hey! message */}
    </div>
  );
}
