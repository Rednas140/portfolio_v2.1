export default function Navlink({link, content} : any){
    return(
        <a href={link} className="c-navbar-list-item">{!!content ? content : "Navlink text"}</a>
    )
}