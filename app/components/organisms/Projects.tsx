import ProjectCard from "../molecules/ProjectCard";
import QuestaImage from "../../../public/assets/questa_mockup.png"
import AccMindsImage from "../../../public/assets/AccMinds_mockup.png"

export default function Projects(){
    return(
        <section className="c-projects" id="projects">
            <h2>Mijn projecten</h2>
            <div className="c-projects-row">
                <ProjectCard ProjectImage={AccMindsImage} Title="Accessible minds" Description="Het bouwen van een toegankelijke website voor een bedrijf gespecialiseerd in digitale toegankelijkheid" link="https://accessibleminds.nl"></ProjectCard>
                <ProjectCard ProjectImage={QuestaImage} Title="Questa" Description="Het verbeteren van de toegankelijkheid van digitale formulieren voor slechtziende en blinde gebruikers" link="https://youtu.be/XKMDUDyFGG4"></ProjectCard>
            </div>
        </section>
    )
}