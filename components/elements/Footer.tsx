export default function Header() {
    return(
        <footer className="bg-usc-red">
            <div className="flex items-center pl-4 font-light basis-full justify-between">
                <div className='flex flex-row font-caslon py-5'>
                    <a className='flex pr-0 text-3xl text-usc-yellow' href='/'>
                        USC
                    </a>
                    <a className="flex pr-6 text-3xl text-white" href='/'>
                    Debate
                    </a>
                </div>
                <div className="flex flex-row">
                    <a href="/sitemap" className="pr-6 hover:text-usc-yellow text-lg font-sans">Sitemap</a>
                </div>
            </div>
            <div className="flex items-center px-4 pb-4 font-light font-source_sans basis-full justify-between">
                <p className="font-thin font-source_sans text-xs">Copyright © 2024 USC Trojan Debate Squad</p>
                <p className="hidden md:flex font-thin font-sans text-xs">Designed and built by&nbsp;<a href="https://adarsh.zip" className="text-white transition ease-in-out duration-300 hover:font-medium hover:animate-bounce hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] hover:from-green-300 hover:via-emerald-400 hover:to-cyan-400 hover:text-transparent hover:bg-clip-text">Adarsh Agrawal</a>.</p>
            </div>
        </footer>
    )
}