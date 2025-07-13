import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'About',
  }
  
  export default function About() {
    return (
        <main className="">
            <div className="bg-white">
                <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-newAnnenberg flex h-[91vh]">
                    <div className="pt-[60vh] pl-[5vh]">
                        <h2 className="text-usc-red italic font-petrona text-5xl sm:px-1 bg-white bg-opacity-70 p-1 max-w-lg text-left">
                            The TDS has represented <span className="text-black">excellence</span> in policy debate <span className="text-black">since 1880</span>.
                        </h2>
                    </div>
                </div>
                <div className="bg-white py-5 pt-10 mx-auto max-w-6xl basis-full text-black px-10">
                    <h1 className="text-usc-red text-center text-3xl font-source_sans">Who Are We?</h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2 pt-1">
                            <p>The USC Trojan Debate Squad is a unique learning environment that represents USC&apos;s longstanding commitment to excellence in the undergraduate educational experience.</p>
                            <p>When debate at USC began in 1880, as USC&apos;s first chartered student organization, it reflected the importance of public speaking as a skill needed for young Trojans. Trojan Debate, then supported by the College of Oratory, trained talented students and prepared them for competitions. Over the last 130 years the Trojan Debate Squad has played a leading role in teaching debate as a unique form of critical thinking and advocacy.</p>
                            <p>Today, the Annenberg School for Communication &amp; Journalism hosts the debate squad and its faculty teaches debate as an essential skill for today&apos;s increasingly information-rich society. The squad competes in policy debate competitions hosted by the National Debate Tournament (NDT) and the Cross-Examination Debate Association (CEDA).</p>
                            <p>Being a part of the squad is an opportunity for a unique educational experience. Trojan debaters excel in the classroom, at competitions, and in all of our projects.</p>
                        </div>
                        
                        {/* Photo Placeholders Section */}
                        <section className="mt-12">
                            <h2 className="text-usc-red text-center text-2xl mb-8">Team Photos &amp; Information</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Placeholder 1 */}
                                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center min-h-[300px] flex flex-col justify-center">
                                    <div className="text-gray-400 mb-4">
                                        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Photo Placeholder 1</h3>
                                    <p className="text-sm text-gray-500">Add photo and description here</p>
                                </div>

                                {/* Placeholder 2 */}
                                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center min-h-[300px] flex flex-col justify-center">
                                    <div className="text-gray-400 mb-4">
                                        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Photo Placeholder 2</h3>
                                    <p className="text-sm text-gray-500">Add photo and description here</p>
                                </div>

                                {/* Placeholder 3 */}
                                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center min-h-[300px] flex flex-col justify-center">
                                    <div className="text-gray-400 mb-4">
                                        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Photo Placeholder 3</h3>
                                    <p className="text-sm text-gray-500">Add photo and description here</p>
                                </div>

                                {/* Placeholder 4 */}
                                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center min-h-[300px] flex flex-col justify-center">
                                    <div className="text-gray-400 mb-4">
                                        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Photo Placeholder 4</h3>
                                    <p className="text-sm text-gray-500">Add photo and description here</p>
                                </div>

                                {/* Placeholder 5 */}
                                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center min-h-[300px] flex flex-col justify-center">
                                    <div className="text-gray-400 mb-4">
                                        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Photo Placeholder 5</h3>
                                    <p className="text-sm text-gray-500">Add photo and description here</p>
                                </div>

                                {/* Placeholder 6 */}
                                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center min-h-[300px] flex flex-col justify-center">
                                    <div className="text-gray-400 mb-4">
                                        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Photo Placeholder 6</h3>
                                    <p className="text-sm text-gray-500">Add photo and description here</p>
                                </div>
                            </div>
                        </section>

                        <div className="flex flex-col gap-8 pt-1">
                            <h2 className="text-usc-red text-center text-2xl">Coaches</h2>
                            
                            {/* Sean Kennedy - Left aligned */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="text-gray-400 text-center">
                                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm">Headshot</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-usc-red text-xl mb-3">Sean Kennedy, Director of Debate</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        [Bio placeholder] Sean Kennedy serves as the Director of Debate for the USC Trojan Debate Squad. 
                                        His leadership and expertise have guided the team to numerous successes in national competitions. 
                                        Add detailed bio information here including background, achievements, and coaching philosophy.
                                    </p>
                                </div>
                            </div>

                            {/* Joshua Michael - Right aligned */}
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="text-gray-400 text-center">
                                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm">Headshot</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-usc-red text-xl mb-3">Joshua Michael</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        [Bio placeholder] Joshua Michael brings extensive experience in policy debate coaching and 
                                        has been instrumental in developing the team&apos;s strategic approach. Add detailed bio information 
                                        here including background, achievements, and coaching philosophy.
                                    </p>
                                </div>
                            </div>

                            {/* Julian Kuffour - Left aligned */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="text-gray-400 text-center">
                                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm">Headshot</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-usc-red text-xl mb-3">Julian Kuffour</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        [Bio placeholder] Julian Kuffour contributes his expertise in debate theory and argumentation 
                                        to help students develop critical thinking skills. Add detailed bio information here including 
                                        background, achievements, and coaching philosophy.
                                    </p>
                                </div>
                            </div>

                            {/* Nate Martin - Right aligned */}
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="text-gray-400 text-center">
                                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm">Headshot</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-usc-red text-xl mb-3">Nate Martin</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        [Bio placeholder] Nate Martin specializes in evidence analysis and research methodology, 
                                        helping students develop strong argumentative foundations. Add detailed bio information 
                                        here including background, achievements, and coaching philosophy.
                                    </p>
                                </div>
                            </div>

                            {/* Ross Fitzpatrick - Left aligned */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="text-gray-400 text-center">
                                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm">Headshot</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-usc-red text-xl mb-3">Ross Fitzpatrick</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        [Bio placeholder] Ross Fitzpatrick focuses on public speaking and presentation skills, 
                                        helping students develop confidence and effective communication techniques. Add detailed 
                                        bio information here including background, achievements, and coaching philosophy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-10">
                    <h2 className="text-usc-red text-2xl text-center mb-6">Learn More</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link 
                            href="/about/team" 
                            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <h3 className="text-usc-red font-semibold mb-1">Current Team Members</h3>
                            <p className="text-sm text-gray-600">Meet our current squad members</p>
                        </Link>
                        <Link 
                            href="/resources" 
                            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <h3 className="text-usc-red font-semibold mb-1">Resources</h3>
                            <p className="text-sm text-gray-600">Access debate materials and guides</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}