import ProjectCard from "../molecules/ProjectCard";
import QuestaImage from "../../../public/assets/Questa_Placholder.jpg"
import AccMindsImage from "../../../public/assets/AccMinds_Placeholder.jpg"

export default function Projects(){
    return(
        <div className="c-projects">
            <h2>My projects</h2>
            <div className="c-projects-row">
                <ProjectCard ProjectImage={QuestaImage} Title="Accessible minds" Description="Building an accessible website for a company specializing in accessibility"></ProjectCard>
                <ProjectCard ProjectImage={AccMindsImage} Title="Questa" Description="Enhancing form accessibility for visually impaired users."></ProjectCard>
            </div>
        </div>
    )
}