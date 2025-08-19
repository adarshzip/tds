import Link from "next/link"

export default function Footer() {
    return(
        <footer className="bg-usc-red pt-8">
            <div className="flex flex-col items-center justify-center font-caslon mb-2 tracking-tighter">
                <div className="flex flex-row items-center mb-2">
                    <Link className='text-3xl text-usc-yellow focus:outline-none focus-visible:outline-none' href='/'>USC</Link>
                    <Link className="text-3xl text-white focus:outline-none focus-visible:outline-none" href='/'>Debate</Link>
                </div>
            </div>
            <nav className="w-full flex flex-col items-center">
                <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-center mb-6">
                    <Link href="/" className="text-white hover:text-usc-yellow transition">Home</Link>
                    <Link href="/about" className="text-white hover:text-usc-yellow transition">Coaches</Link>
                    <Link href="/about/team" className="text-white hover:text-usc-yellow transition">Team</Link>
                    <Link href="/about/archives" className="text-white hover:text-usc-yellow transition">Archives</Link>
                    <Link href="/recruiting" className="text-white hover:text-usc-yellow transition">Join the Team</Link>
                    {false && (
                        <>
                            <Link href="/outreach" className="text-white hover:text-usc-yellow transition">Community Outreach</Link>
                            <Link href="/programs" className="text-white hover:text-usc-yellow transition">Programs</Link>
                            <Link href="/donate" className="text-white hover:text-usc-yellow transition">Support the Team</Link>
                        </>
                    )}
                    {false && (
                        <Link href="/contact" className="text-white hover:text-usc-yellow transition">Contact Us</Link>
                    )}
                    <a href="https://www.instagram.com/usctrojandebate/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-usc-yellow transition">Instagram</a>
                </div>
            </nav>
        </footer>
    )
}