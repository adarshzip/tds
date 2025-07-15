import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'About',
}

export default function About() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-caslon mb-6">About the Trojan Debate Squad</h1>
                    <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto mb-4">
                        The TDS has represented excellence in policy debate since 1880 as USC&apos;s first chartered student organization.
                    </p>
                    <p className="text-lg md:text-xl font-source_sans max-w-3xl mx-auto opacity-90">
                        The Trojan Debate Squad is USC&apos;s official policy debate team, competing nationally in NDT/CEDA tournaments and expanding debate access in Los Angeles public schools. The squad is committed to academic excellence, innovation, and community outreach.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Team Photos Section */}
                <section className="mb-16">
                    <h2 className="text-usc-red text-3xl font-caslon text-center mb-8">Team Photos &amp; Information</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Photo Placeholders */}
                        {[1,2,3,4,5,6].map((n) => (
                            <div key={n} className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center min-h-[220px] flex flex-col justify-center">
                                <div className="text-gray-400 mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-600 mb-2">Photo Placeholder {n}</h3>
                                <p className="text-sm text-gray-500">Add photo and description here</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Coaches Section */}
                <section className="mb-16">
                    <h2 className="text-usc-red text-3xl font-caslon text-center mb-8">Coaches</h2>
                    <div className="flex flex-col gap-12">
                        {/* Coach Cards */}
                        {/* Sean Kennedy */}
                        <div className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 rounded-lg p-6">
                            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="text-gray-400 text-center">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">Headshot</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-usc-red text-xl mb-3">Sean Kennedy, Director of Debate</h3>
                                <p className="text-gray-700 leading-relaxed">[Bio placeholder] Sean Kennedy serves as the Director of Debate for the USC Trojan Debate Squad. His leadership and expertise have guided the team to numerous successes in national competitions. Add detailed bio information here including background, achievements, and coaching philosophy.</p>
                            </div>
                        </div>
                        {/* Joshua Michael */}
                        <div className="flex flex-col md:flex-row-reverse gap-6 items-start bg-gray-50 rounded-lg p-6">
                            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="text-gray-400 text-center">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">Headshot</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-usc-red text-xl mb-3">Joshua Michael</h3>
                                <p className="text-gray-700 leading-relaxed">[Bio placeholder] Joshua Michael brings extensive experience in policy debate coaching and has been instrumental in developing the team's strategic approach. Add detailed bio information here including background, achievements, and coaching philosophy.</p>
                            </div>
                        </div>
                        {/* Julian Kuffour */}
                        <div className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 rounded-lg p-6">
                            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="text-gray-400 text-center">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">Headshot</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-usc-red text-xl mb-3">Julian Kuffour</h3>
                                <p className="text-gray-700 leading-relaxed">[Bio placeholder] Julian Kuffour contributes his expertise in debate theory and argumentation to help students develop critical thinking skills. Add detailed bio information here including background, achievements, and coaching philosophy.</p>
                            </div>
                        </div>
                        {/* Nate Martin */}
                        <div className="flex flex-col md:flex-row-reverse gap-6 items-start bg-gray-50 rounded-lg p-6">
                            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="text-gray-400 text-center">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">Headshot</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-usc-red text-xl mb-3">Nate Martin</h3>
                                <p className="text-gray-700 leading-relaxed">[Bio placeholder] Nate Martin specializes in evidence analysis and research methodology, helping students develop strong argumentative foundations. Add detailed bio information here including background, achievements, and coaching philosophy.</p>
                            </div>
                        </div>
                        {/* Ross Fitzpatrick */}
                        <div className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 rounded-lg p-6">
                            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="text-gray-400 text-center">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">Headshot</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-usc-red text-xl mb-3">Ross Fitzpatrick</h3>
                                <p className="text-gray-700 leading-relaxed">[Bio placeholder] Ross Fitzpatrick focuses on public speaking and presentation skills, helping students develop confidence and effective communication techniques. Add detailed bio information here including background, achievements, and coaching philosophy.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Learn More Section */}
                <section className="bg-gray-50 py-8 rounded-lg">
                    <h2 className="text-usc-red text-3xl font-caslon text-center mb-6">Learn More</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link 
                            href="/about/team" 
                            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <h3 className="text-usc-red font-semibold mb-1">Current Team Members</h3>
                            <p className="text-sm text-gray-600">Meet our current squad members</p>
                        </Link>
                        <Link
                            href="/about/archives"
                            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <h3 className="text-usc-red font-semibold mb-1">Archives</h3>
                            <p className="text-sm text-gray-600">Explore the history and legacy of the Trojan Debate Squad</p>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}