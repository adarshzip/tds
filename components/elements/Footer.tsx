import Link from "next/link"

export default function Header() {
    return(
        <footer className="bg-usc-red">
            <div className="flex items-center pl-4 font-light basis-full justify-between">
                <div className='flex flex-row font-caslon pt-5 pb-1 tracking-tighter'>
                    <Link className='flex pr-0 text-3xl text-usc-yellow' href='/'>
                        USC
                    </Link>
                    <Link className="flex pr-6 text-3xl text-white" href='/'>
                        Debate
                    </Link>
                </div>
                <div className="flex flex-row">
                    <Link href="/sitemap" className="pr-6 transition duration-150 ease-in text-white hover:text-usc-yellow text-lg font-sans">Sitemap</Link>
                </div>
            </div>
            <div className="flex items-center px-4 pb-4 font-light font-source_sans basis-full justify-between">
                <p className="font-thin font-source_sans text-xs text-white">Copyright © 2024 USC Trojan Debate Squad</p>
                <p className="hidden md:flex font-thin font-sans text-xs text-white">Designed and built by&nbsp;<Link href="https://adarsh.zip" className="text-white hover:font-medium hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] hover:from-green-300 hover:via-emerald-400 hover:to-cyan-400 hover:text-transparent hover:bg-clip-text">Adarsh Agrawal</Link>.</p>
            </div>
        </footer>
    )
}