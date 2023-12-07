import HeaderContent from '../molecules/HeaderContent'
import HeaderImages from '../molecules/HeaderImages'

export default function Header(){
    return(
        <header className='c-header'>
            <HeaderContent></HeaderContent>
            <HeaderImages></HeaderImages>
        </header>
    )
}