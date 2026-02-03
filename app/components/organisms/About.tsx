import AboutContent from "../molecules/AboutContent";
import Skills from "../molecules/Skills";

export default function About() {
  return (
    <section
      className="grid md:grid-cols-12 bg-neutral-900 text-white justify-between items-center gap-6 py-10 px-4 md:px-12 lg:py-18 lg:px-28 xl:py-24 xl:px-53 lg:min-h-screen"
      id="about"
    >
      <AboutContent></AboutContent>
      <Skills></Skills>
    </section>
  );
}
