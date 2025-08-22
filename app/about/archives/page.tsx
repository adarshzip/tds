import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Archives',
  description: 'Explore the history and legacy of the USC Trojan Debate Squad.'
}

export default function Archives() {
  return (
    <main className="bg-white min-h-screen">

      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Archives</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Learn about the history of the Trojan Debate Squad. 
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-10 py-12">

        {/* Who Are We Section */}
        <section className="mb-16">
          <h2 className="text-usc-red text-4xl font-caslon text-center mb-8">Who Are We?</h2>
          <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            <p className="mb-4">The Trojan Debate Squad (TDS), USC&apos;s first chartered student organization, is devoted to teaching argumentation and analytic thinking skills to students through academic debate. The TDS is one of the nation&apos;s leading collegiate debate programs and focuses on competitive policy debate, research on the digital transition in debate and expanding debate in Los Angeles public schools.</p>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-usc-red text-3xl font-caslon text-center mb-8">History of the Trojan Debate Squad</h2>
          <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">Established in 1880 as the university&apos;s first chartered undergraduate organization, the USC Trojan Debate Squad has enjoyed a long tradition of academic excellence and competitive success.</p>
            <p className="mb-4">Strong faculty leadership has been a hallmark of Trojan Debate, beginning with the appointment of Dr. William Olmstead in 1908. Trojan debate flourished under the leadership of distinguished forensics expert Dr. Alan Nichols who guided the Trojans for four decades, beginning in 1921.</p>
            <p className="mb-4">Under Dr. Nichols&apos; tenure the Trojans emerged into a national debate and forensics leader. Trojans routinely were successful at regional competitions and national debate tours. Among these tours, the Trojans hosted the talented students from Wiley College in 1938. This debate would eventually become immortalized in the Harpo Film, &quot;The Great Debaters.&quot; Despite the cinematic portrayal, it was USC, not Harvard, who hosted this debate.</p>
            <p className="mb-4">As the rise of mass transportation made it possible for individual debate exhibitions to grow into large competitions featuring hundreds of teams, intercollegiate debate developed a first national championship. The National Debate Tournament (NDT) continues today as the longest running and most prestigious intercollegiate debate championship. Dr. Nichols played an important role in the creation of this competition.</p>
            <p className="mb-4">The Trojans have been a cornerstone of the National Debate Tournament since it began in 1947 when Potter Kerfoot and George Grover finished second at the inaugural tournament. The following year, Kerfoot also won the first ever Top Speaker award. The Trojans have maintained a standard of excellence at the NDT earning individual speaker awards as well as team performances. Trojans hold records for the longest continual streak of qualification (having qualified for every year since 1963) and for qualifying in the most seasons of any university. We recognize the full list of every Trojan who has qualified for the NDT.</p>
            <p className="mb-4">Today, the Trojans are active in the merged NDT/CEDA (Cross-Examination Debate Association) community. Trojan debaters compete at tournaments recognized by both events and at both national championships.</p>
            <p className="mb-4">Outside of policy competitions, the Trojans continue to take part in exhibitions and public events. Just as Trojans once traveled by train for public debates across the country, in recent years the Trojans have taken part in a series of federally supported public debates, including debates sponsored by the Environmental Protection Agency. One such debate brought Trojans to Washington DC for an official inauguration week event sponsored by the Smithsonian&apos;s National Museum of African American History and Culture celebrating the inauguration of President Barack Obama.</p>
            <p className="mb-4">Trojan debaters have also been at the forefront of promoting debate through media, including early involvement in radio debates, participation in 1960s televised debates or recent project shooting a working pilot for a college debate competition program. The Annenberg Digital Debate Initiative is the latest such program.</p>
            <p className="mb-4">Throughout all of the changes in college debate, the greatest constant are the outstanding Trojan debaters. Each year the squad elects a captain to serve as their student leader. The squad also recognizes an outstanding male and female student with awards named for esteemed alumni Robert Croutch and Lilian Kim.</p>
            <p className="mb-4">Trojan debate alumni represent the best of USC. Graduates of the USC debate Squad have gone onto become leaders in government, public service, industry, law, education, and the military, taking with them the high standards of inquiry, craftsmanship, integrity, and determination gained from their forensics experience. Each new class of students becomes part of this tradition as the squad looks forward to a bright future of debate at USC.</p>
          </div>
        </section>

        {/* Directors Link */}
        <div className="flex justify-center mb-4">
          <Link href="/about/archives/directors" className="bg-white border border-usc-red text-usc-red px-6 py-3 rounded-lg font-semibold hover:bg-usc-red hover:text-white transition-colors text-center shadow-sm">
            Directors of the Trojan Debate Squad
          </Link>
        </div>
        {/* NDT Link */}
        <div className="flex justify-center mb-8">
          <Link href="/about/archives/ndt" className="bg-white border border-usc-red text-usc-red px-6 py-3 rounded-lg font-semibold hover:bg-usc-red hover:text-white transition-colors text-center shadow-sm">
            USC at the National Debate Tournament
          </Link>
        </div>
      </div>
    </main>
  );
} 