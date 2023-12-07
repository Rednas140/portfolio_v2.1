import AboutContent from "../molecules/AboutContent";
import Skills from "../molecules/Skills";

export default function About(){
    return(
        <section className="c-about" id="about">
            <AboutContent></AboutContent>
            <Skills></Skills>
        </section>
    )
}