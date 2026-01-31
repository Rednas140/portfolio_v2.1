import Chip from "../atoms/Chip";

export default function Skills() {
  return (
    <div className="flex flex-col gap-3 lg:gap-6">
      <h2>Skills</h2>
      <div className="flex flex-col gap-9">
        <div>
          <h3>General</h3>
          <div className="flex flex-row gap-3 my-3">
            <Chip type="secondary" content="UI & UX"></Chip>
            <Chip type="secondary" content="Frontend dev"></Chip>
            <Chip type="secondary" content="A11Y"></Chip>
          </div>
          <div className="flex flex-row gap-3 my-3">
            <Chip type="secondary" content="Wireframing"></Chip>
            <Chip type="secondary" content="Testing"></Chip>
            <Chip type="secondary" content="WCAG"></Chip>
          </div>
          <div className="flex flex-row gap-3 my-3">
            <Chip type="secondary" content="Agile"></Chip>
            <Chip type="secondary" content="Project managing"></Chip>
          </div>
        </div>
        <div>
          <h3>Development</h3>
          <div className="flex flex-row gap-3 my-3">
            <Chip type="primary" content="HTML"></Chip>
            <Chip type="primary" content="CSS"></Chip>
            <Chip type="primary" content="Javascript"></Chip>
          </div>
          <div className="flex flex-row gap-3 my-3">
            <Chip type="primary" content="Sass"></Chip>
            <Chip type="primary" content="Tailwind"></Chip>
            <Chip type="primary" content="jQuery"></Chip>
          </div>
          <div className="flex flex-row gap-3 my-3">
            <Chip type="primary" content="Git"></Chip>
            <Chip type="primary" content="ARIA"></Chip>
            <Chip type="primary" content="Craft CMS"></Chip>
          </div>
        </div>
      </div>
    </div>
  );
}
