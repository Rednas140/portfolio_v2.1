import Navlink from "../atoms/Navlink";

export default function NavItems({ isOpen }: any) {
  return (
    <div
      className={`hidden md:flex flex-row items-center gap-8 ${isOpen ? "flex bg-neutral-900 md:bg-white absolute md:static flex-col md:flex-row justify-center md:justify-start top-100 left-0 w-screen md:w-auto h-1/2 md:h-auto" : ""}`}
    >
      <Navlink link="#about" content="About"></Navlink>
      <Navlink link="#projects" content="Projects"></Navlink>
      <Navlink link="#footer" content="Contact"></Navlink>
    </div>
  );
}
