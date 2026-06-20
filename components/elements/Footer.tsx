import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-usc-red pt-8">
            <div className="flex flex-col items-center justify-center font-caslon mb-2 tracking-tighter">
                <div className="flex flex-row items-center mb-2">
                    <Link className='text-3xl text-usc-yellow focus:outline-none focus-visible:outline-none' href='/'>USC</Link>
                    <Link className="text-3xl text-white focus:outline-none focus-visible:outline-none" href='/'>Debate</Link>
                </div>
            </div>
            <nav className="w-full flex flex-col items-center">
                <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-center">
                    <Link href="/" className="text-white hover:text-usc-yellow transition">Home</Link>
                    <Link href="/recruiting" className="text-white hover:text-usc-yellow transition">Join the Team</Link>
                    <a href="https://www.instagram.com/usctrojandebate/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-usc-yellow transition">Instagram</a>
                </div>
            </nav>
            <p className="px-2 pb-1 text-[7px] text-white text-right">
                <Link href={"https://adarsh.zip"} className="hover:text-usc-yellow">Adarsh made this.</Link>
            </p>
        </footer>
    )
}
