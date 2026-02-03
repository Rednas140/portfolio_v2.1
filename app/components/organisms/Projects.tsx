import ProjectCard from "../molecules/ProjectCard";
import QuestaImage from "../../../public/assets/questa_mockup.png";
import AccMindsImage from "../../../public/assets/AccMinds_mockup.png";
import { MotionHeading } from "../atoms/Heading";

export default function Projects() {
  return (
    <section
      className="flex flex-col gap-6 2xl:min-h-screen py-10 px-4 sm:py-18 sm:px-12 lg:px-28 2xl:py-24 2xl:px-53"
      id="projects"
    >
      <MotionHeading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        as="h2"
      >
        Mijn werk!
      </MotionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        <ProjectCard
          ProjectImage={AccMindsImage}
          Title="Accessible minds"
          Description="Het bouwen van een toegankelijke website voor een bedrijf gespecialiseerd in digitale toegankelijkheid"
          link="https://accessibleminds.nl"
        ></ProjectCard>
        <ProjectCard
          ProjectImage={QuestaImage}
          Title="Questa"
          Description="Het verbeteren van de toegankelijkheid van digitale formulieren voor slechtziende en blinde gebruikers"
          link="https://youtu.be/XKMDUDyFGG4"
        ></ProjectCard>
      </div>
    </section>
  );
}
