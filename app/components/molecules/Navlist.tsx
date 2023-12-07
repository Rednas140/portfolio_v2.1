import Navlink from '../atoms/Navlink';

export default function NavItems({isOpen} : any){
    return(
        <div className={isOpen ? 'c-navbar-list open' : 'c-navbar-list'}>  
            <Navlink link="#about" content="About"></Navlink>
            <Navlink link="#projects" content="Projects"></Navlink>
            <Navlink link="#footer" content="Contact"></Navlink>
        </div>
    )
}