import logo from '../../public/logo.png'

export function Header(){
    return(
        <header className='flex items-center gap-5 py-2'>
            <img src={logo} alt='charon-logo' className='rounded-md border border-solid border-black' />
            <nav className='flex items-center gap-5'>
                <a href="#" className='font-medium text-sm text-zinc-300'>Events</a>
                <a href="#" className='font-medium text-sm'>Attendees</a>
            </nav>
        </header>
    )
}