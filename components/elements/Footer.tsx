import Link from "next/link"

export default function Footer() {
    return(
        <footer className="bg-usc-red pt-8">
            <div className="flex flex-col items-center justify-center font-caslon mb-6 tracking-tighter">
                <div className="flex flex-row items-center mb-2">
                    <Link className='text-3xl text-usc-yellow pr-2' href='/'>USC</Link>
                    <Link className="text-3xl text-white" href='/'>Debate</Link>
                </div>
            </div>
            <nav className="w-full flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-center mb-6">
                    <div>
                        <ul className="space-y-1 text-sm">
                            <li><Link href="/" className="text-white hover:text-usc-yellow transition">Home</Link></li>
                            <li><Link href="/about" className="text-white hover:text-usc-yellow transition">About the Team</Link></li>
                            <li><Link href="/prospects" className="text-white hover:text-usc-yellow transition">Join the Team</Link></li>
                            <li><Link href="/outreach" className="text-white hover:text-usc-yellow transition">Community Outreach</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-1 text-sm">
                            <li><Link href="/donate" className="text-white hover:text-usc-yellow transition">Support the Team</Link></li>
                            <li><Link href="/contact" className="text-white hover:text-usc-yellow transition">Contact Us</Link></li>
                            <li><Link href="/high-school" className="text-white hover:text-usc-yellow transition">High School Programs</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    )
}