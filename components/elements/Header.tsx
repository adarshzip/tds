import Link from 'next/link';
import React from 'react';
import { render } from 'react-dom';
//icons
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
    return(
        <header className='bg-usc-red flex items-center h-16 pl-4 font-light font-Source_Sans_3 basis-full justify-between'>
            <nav className='flex justify-start flex-row items-center px-4 space-y-4 sm:space-y-0'>
                <div className='flex flex-row font-Caslon'>
                    <a className='flex pr-0 text-3xl text-usc-yellow' href='/'>
                        USC
                    </a>
                    <a className="flex pr-6 text-3xl text-white" href='/'>
                    Debate
                    </a>
                </div>

                <a className="hidden pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="/about">
                About
                </a>

                <a className="hidden pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="/prospects">
                    Prospects
                </a>

                <a className="hidden pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="/outreach">
                    Outreach
                </a>

                <a className="hidden pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="/donate">
                    Donate
                </a>
                
                <a className="hidden text-lg text-white hover:text-usc-yellow sm:flex justify-self-end" href="/contact">
                    Contact
                </a>
            </nav>

            <nav className="flex flex-row items-center justify-end pr-8 space-y-4 flex-nowrap sm:space-y-0">
                <a className="hidden pr-4 text-lg text-white hover:text-usc-yellow sm:flex" href="https://instagram.com/uscdebate"> 
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </nav>
        </header>
    )
}