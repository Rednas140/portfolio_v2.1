import Image from 'next/image'

export default function ProjectCard({ProjectImage, Title, Description} : any){
    return(
        <div className='c-projects-card'>
            <Image className='c-projects-card-image' alt={ "A mockup of the project " + Title } src={ProjectImage}></Image>
            <h3>{!!Title ? Title : "Project title"}</h3>
            <p>{!!Description ? Description : "Project description"}</p>
        </div>
    )
}