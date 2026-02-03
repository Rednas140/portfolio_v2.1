import Image from "next/image";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

export default function ProjectCard({
  ProjectImage,
  Title,
  Description,
  link,
}: any) {
  return (
    <div className="flex flex-col items-start gap-6">
      <Image
        className="aspect-video w-full h-auto rounded-md shadow-xl"
        alt={"A mockup of the project " + Title}
        src={ProjectImage}
      ></Image>
      <Heading as="h3">{!!Title ? Title : "Project title"}</Heading>
      <p>{!!Description ? Description : "Project description"}</p>
      <Button link={link} content={"Bekijk " + Title} target="_blank"></Button>
    </div>
  );
}
