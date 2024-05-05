import { Metadata } from "next";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
    title: 'About',
  }
  
export default function History() {
    return (
        <main className="">
            <div className="bg-white ">
                <div className="max-w-6xl mx-auto px-10 flex text-gray-500 text-sm py-5 gap-1">
                    <a href="/" className="text-usc-red underline">Home</a>
                    <FontAwesomeIcon icon={faArrowRight} className="my-auto"/>
                    <a href="/about" className="text-usc-red underline">About</a>
                    <FontAwesomeIcon icon={faArrowRight} className="my-auto"/>
                    <a href="/about/history" className="text-usc-red underline">Team History</a>
                </div>
                <hr className="max-w-6xl mx-auto"></hr>
                <div className="py-5 mx-auto max-w-6xl basis-full text-black px-10">
                    <h1 className="text-usc-red text-center text-5xl pb-6">Team History</h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3 pt-1">
                            <p>Established in 1880 as the university&apos;s first chartered undergraduate organization, the USC Trojan Debate Squad has enjoyed a long tradition of academic excellence and competitive success.</p>
                            <div className="text-gray-500 text-sm text-center">
                                <Image 
                                    src={"https://drive.google.com/uc?id=1WWrNc63G4hLBDpU7V0mz_5yidD3zSQOr"}
                                    alt="An image of Dr. William Olmstead, the first faculty leader of the Trojan Debate Squad."
                                    width={138}
                                    height={216}
                                    className="mx-auto py-4"
                                />
                                <p>Dr. William Olmstead, the first faculty leader of the Trojan Debate Squad, in 1914.</p>
                            </div>
                            <p>Strong faculty leadership has been a hallmark of Trojan Debate, beginning with the appointment of Dr. William Olmstead in 1908. Trojan debate flourished under the leadership of distinguished forensics expert Dr. Alan Nichols who guided the Trojans for four decades, beginning in 1921.</p>
                            <div className="flex justify-evenly align-middle">
                                <div className="text-gray-500 text-sm text-center my-auto">
                                    <Image 
                                        src={"https://drive.google.com/uc?id=1D9Xbl_qQGM21vXHpJJ2ASyl63tstvqRo"}
                                        alt="An image of Dr. Alan Nichols."
                                        width={138}
                                        height={216}
                                        className="mx-auto py-4"
                                    />
                                    <p>Dr. Alan Nichols in 1925.</p>
                                </div>
                                <div className="text-gray-500 text-sm text-center">
                                <Image 
                                    src={"https://drive.google.com/uc?id=1YrkBgjcXWrffK7_NgQAoPDcgOwLEFMvc"}
                                    alt="An image of the 1922 Trojan Debate Squad."
                                    width={400}
                                    height={400}
                                    className="mx-auto py-4"
                                />
                                <p>The 1922 Trojan Debate Squad.</p>
                            </div>
                            </div>
                            <p>Under Dr. Nichols&apos; tenure the Trojans emerged into a national debate and forensics leader. Trojans routinely were successful at regional competitions and national debate tours. Among these tours, the Trojans hosted the talented students from Wiley College in 1938. This debate would eventually become immortalized in the Harpo Film, &quot;<a href="https://www.imdb.com/title/tt0427309/" className="text-usc-red underline">The Great Debaters</a>.&quot; Despite the cinematic portrayal, it was USC, not Harvard, who hosted this debate.</p>
                            <p>As the rise of mass transportation made it possible for individual debate exhibitions to grow into large competitions featuring hundreds of teams, intercollegiate debate developed a first national championship. The National Debate Tournament (NDT) continues today as the longest running and most prestigious intercollegiate debate championship. Dr. Nichols played an important role in the creation of this competition.</p>
                            <p>The Trojans have been a cornerstone of the National Debate Tournament since it began in 1947 when Potter Kerfoot and George Grover finished second at the inaugural tournament. The following year, Kerfoot also won the first ever Top Speaker award. The Trojans have maintained a standard of excellence at the NDT earning <a href="/about/ndtspeakers" className="text-usc-red underline">individual speaker awards</a> as well as team performances. Trojans hold records for the longest continual streak of qualification (having qualified for every year since 1963) and for qualifying in the most seasons of any university. We recognize the <a href="/about/NDTHistory" className="text-usc-red underline">full list of every Trojan who has qualified for the NDT</a>.</p>
                            <p>Today, the Trojans are active in the merged NDT/CEDA (Cross-Examination Debate Association) community. Trojan debaters compete at tournaments recognized by both events and at both national championships.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}