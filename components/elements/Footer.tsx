export default function Header() {
    return(
        <footer className="bg-usc-red flex items-center pl-4 font-light font-Source_Sans_3 basis-full justify-between">
            <div className='flex flex-row font-Caslon py-5'>
                <a className='flex pr-0 text-3xl text-usc-yellow' href='/'>
                    USC
                </a>
                <a className="flex pr-6 text-3xl text-white" href='/'>
                Debate
                </a>
            </div>
            <a href="/sitemap" className="pr-6 hover:text-usc-yellow text-lg">Sitemap</a>
        </footer>
    )
}