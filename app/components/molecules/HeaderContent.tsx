import Button from '../atoms/Button';

export default function HeaderContent(){
    return(
        <div className="c-header-content" data-aos="fade-right">
            <h1>
                Hoi hoi, ik ben Sander Verhoeven
            </h1>
            <p>
                Een junior developer met een passie voor inclusive design en development. Wonende in Papendrecht, Zuid-holland.
            </p>
            <Button link="#projects" content="Kijk naar mijn projecten!"></Button>
        </div>
    )
}