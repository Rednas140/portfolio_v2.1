import Button from '../atoms/Button';

export default function HeaderContent(){
    return(
        <div className="c-headerContent">
            <h1>
                Hey there, I'm Sander Verhoeven
            </h1>
            <p>
                A junior developer with a passion for inclusive design and development. Currently based in Papendrecht, The Netherlands.
            </p>
            <Button link="#projects" content="Take a look at my projects"></Button>
        </div>
    )
}