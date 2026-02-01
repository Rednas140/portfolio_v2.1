import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

export default function HeaderContent() {
  return (
    <div className="flex flex-col items-start gap-6 lg:w-155">
      <Heading as="h1" className="w-75 lg:w-120">
        Hoi hoi, ik ben Sander Verhoeven
      </Heading>
      <p>
        Een junior developer met een passie voor inclusive design en
        development. Wonende in Papendrecht, Zuid-holland.
      </p>
      <Button link="#projects" content="Kijk naar mijn projecten!"></Button>
    </div>
  );
}
