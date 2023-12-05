import Navlink from '../atoms/Navlink';

export default function NavItems({isOpen} : any){
    return(
        <div className={isOpen ? 'c-navbar-list open' : 'c-navbar-list'}>  
            <Navlink type="#about" content="About"></Navlink>
            <Navlink type="#projects" content="Projects"></Navlink>
            <Navlink type="#contact" content="Contact"></Navlink>
        </div>
    )
}