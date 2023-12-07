export default function Button({link, content, target}:any){
    return(
        <a href={link} target={!!target ? target : "_self"} className="c-button">{!!content ? content : "Button text"}</a>
    )
}