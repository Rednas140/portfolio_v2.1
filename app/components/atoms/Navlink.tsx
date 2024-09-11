export default function Navlink({link, content} : any){
    return(
        <a href={link} className="c-navbar-list-item" data-aos="fade-down">{!!content ? content : "Navlink text"}</a>
    )
}