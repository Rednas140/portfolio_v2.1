export default function Chip({type, content} : any){
    let chipClasses : string = "c-chip";

    if(type == "primary"){
        chipClasses = "c-chip c-chip--primary"
    }
    else if(type == "secondary"){
        chipClasses = "c-chip c-chip--secondary"
    }
    return(
       <span className={chipClasses}>{content}</span> 
    )
}