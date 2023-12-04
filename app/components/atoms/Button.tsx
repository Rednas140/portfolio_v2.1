export default function Button({link, content}:any){
    return(
        <a href={link} className="c-button">{!!content ? content : "Button text"}</a>
    )
}