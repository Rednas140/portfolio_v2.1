import Chip from "../atoms/chip";

export default function Skills(){
    return(
      <div className="c-about-skills">
        <h2>Skills</h2>
        <h3>General</h3>
        <div className="c-about-skills-row">
            <Chip type="secondary" content="UI & UX"></Chip>
            <Chip type="secondary" content="Frontend dev"></Chip>
            <Chip type="secondary" content="A11Y"></Chip>
        </div>
        <div className="c-about-skills-row">
            <Chip type="secondary" content="Wireframing"></Chip>
            <Chip type="secondary" content="Testing"></Chip>
            <Chip type="secondary" content="WCAG"></Chip>
        </div>
        <div className="c-about-skills-row">
            <Chip type="secondary" content="Agile"></Chip>
            <Chip type="secondary" content="Project managing"></Chip>
        </div>
        <h3>Development</h3>
        <div className="c-about-skills-row">
            <Chip type="primary" content="HTML"></Chip>
            <Chip type="primary" content="CSS"></Chip>
            <Chip type="primary" content="Javascript"></Chip>
        </div>
        <div className="c-about-skills-row">
            <Chip type="primary" content="Sass"></Chip>
            <Chip type="primary" content="Tailwind"></Chip>
            <Chip type="primary" content="jQuery"></Chip>
        </div>
        <div className="c-about-skills-row">
            <Chip type="primary" content="Git"></Chip>
            <Chip type="primary" content="ARIA"></Chip>
            <Chip type="primary" content="Craft CMS"></Chip>
        </div>
      </div>  
    )
}