import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
  }
  
  export default function About() {
    return (
        <main className="bg-white">
            <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-newAnnenberg flex h-[91vh]">
                <div className="flex flex-col gap-0 justify-items-end pt-[60vh] pl-8 md:pl-[70vh]">
                    <h2 className="text-usc-red italic flex text-5xl sm:px-1 bg-white bg-opacity-70 p-1 justify-end">
                        The TDS has represented excellence
                    </h2>
                    <h2 className="text-usc-red italic flex text-5xl sm:px-1 bg-white bg-opacity-70 p-1 justify-end">
                        in policy debate since 1880.
                    </h2>
                </div>
            </div>
            <div className="bg-white py-5 mx-auto max-w-6xl basis-full text-black">
                <h1 className="flex text-usc-red justify-self-center text-3xl">Who Are We?</h1>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2 pt-1">
                        <p>The USC Trojan Debate Squad is a unique learning environment that represents USC’s longstanding commitment to excellence in the undergraduate educational experience.</p>
                        <p>When debate at USC began in 1880, as USC’s first chartered student organization, it reflected the importance of public speaking as a skill needed for young Trojans. Trojan Debate, then supported by the College of Oratory, trained talented students and prepared them for competitions. Over the last 130 years the Trojan Debate Squad has played a leading role in teaching debate as a unique form of critical thinking and advocacy.</p>
                        <p>Today, the Annenberg School for Communication & Journalism hosts the debate squad and its faculty teaches debate as an essential skill for today’s increasingly information-rich society. The squad competes in policy debate competitions hosted by the National Debate Tournament (NDT) and the Cross-Examination Debate Association (CEDA).</p>
                        <p>Being a part of the squad is an opportunity for a unique educational experience. Trojan debaters excel in the classroom, at competitions, and in all of our projects. Fight On!</p>
                    </div>
                    <div className="flex flex-col gap-4 pt-1">
                        <h2 className="text-usc-red align-middle text-2xl">Coaches</h2>
                        <div>
                            <h3 className="text-usc-red text-xl">Sean Kennedy, Director of Debate</h3>
                            <div className="flex flex-row">
                                <p>Bio and photo(?) go here.</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-usc-red text-xl">Joshua Michael</h3>
                            <div className="flex flex-row">
                                <p>Bio and photo(?) go here</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-usc-red text-xl">Julian Kuffour</h3>
                            <div className="flex flex-row">
                                <p>Bio and photo(?) go here</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-usc-red text-xl">Nate Martin</h3>
                            <div className="flex flex-row">
                                <p>Bio and photo(?) go here</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-usc-red text-xl">Ross Fitzpatrick</h3>
                            <div className="flex flex-row">
                                <p>Bio and photo(?) go here</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}