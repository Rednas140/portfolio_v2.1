"use client"
import Logo from '../atoms/Logo';
import NavList from '../molecules/Navlist';
import Hamburger from '../atoms/Hamburger';
import { MouseEvent, useState } from 'react'

export default function Navbar(){
    const [isOpen, setOpen] = useState(false);

    const hamburgerToggle = (event:MouseEvent<HTMLButtonElement>) => {
        setOpen(!isOpen);
    };
    return(
        <nav className='c-navbar'>
            <Logo></Logo>
            <div className='c-navbar-wrap'>
                <Hamburger handleClick={hamburgerToggle} isOpen={isOpen}></Hamburger>
                <NavList isOpen={isOpen}></NavList>
            </div>
        </nav>
    )
}