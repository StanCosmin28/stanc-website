import me from "../assets/profile-me.png";
export default function SectionDescription({ description }) {
  return (
    <div className="flex md:flex-row justify-center items-center gap-5 flex-col">
      <p className="bricolage-grotesque text-lg sm:text-xl md:text-2xl mt-5 font-thin">
        {description}
      </p>
      <img className="w-40 h-40" src={me} alt="" />
    </div>
  );
}
