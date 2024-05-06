//icons
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Header() {
    return(
        <header className='bg-usc-red flex items-center h-16 pl-4 font-light basis-full justify-between'>
            <nav className='flex justify-start flex-row items-center px-4 space-y-4 sm:space-y-0'>
                <div className='font-caslon tracking-tighter tracking pt-1'>
                    <Link className='pr-0 text-3xl text-usc-yellow align-middle' href='/'>
                        USC
                    </Link>
                    <Link className="pr-6 text-3xl text-white align-middle" href='/'>
                        Debate
                    </Link>
                </div>

                <Link href="/about" className="hidden transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow sm:flex" >
                    About
                </Link>

                <Link className="hidden transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="/prospects">
                    Prospects
                </Link>

                <Link className="hidden transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="/outreach">
                    Outreach
                </Link>

                <Link className="hidden transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="/donate">
                    Donate
                </Link>
                
                <Link className="hidden transition duration-150 ease-in text-lg text-white hover:text-usc-yellow sm:flex justify-self-end" href="/contact">
                    Contact
                </Link>
            </nav>

            <nav className="flex flex-row items-center justify-end pr-8 space-y-4 flex-nowrap sm:space-y-0">
                <Link className="hidden transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="https://www.instagram.com/usctrojandebate/"> 
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
            </nav>
        </header>
    )
}