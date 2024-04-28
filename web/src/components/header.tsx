import logo from '../../public/logo.png'
import { NavLink } from './nav-link'

export function Header(){
    return(
        <header className='flex items-center gap-5 py-2'>
            <img src={logo} alt='charon-logo' className='rounded-md border border-solid border-black' />
            <nav className='flex items-center gap-5'>
                <NavLink>Events</NavLink>
                <NavLink>Attendees</NavLink>
            </nav>
        </header>
    )
}