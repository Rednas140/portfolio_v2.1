export default function Hamburger({handleClick, isOpen} : any){
    return(
        <button type="button" onClick={handleClick} className={isOpen ? 'open c-navbar-hamburger' : 'c-navbar-hamburger'} aria-label="hamburger menu, opening the navigation" id="hamburger">
           <span className="c-navbar-hamburger-line"></span> 
           <span className="c-navbar-hamburger-line"></span> 
           <span className="c-navbar-hamburger-line"></span>
           <span className="c-navbar-hamburger-line"></span>
        </button>
    )
}