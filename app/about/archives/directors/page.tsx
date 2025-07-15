import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Directors of the Trojan Debate Squad',
  description: 'A historical list of the directors and leaders of the USC Trojan Debate Squad.'
}

export default function Directors() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex text-gray-500 text-sm gap-1 mb-4">
          <Link href="/" className="text-usc-red underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/about" className="text-usc-red underline">About</Link>
          <span className="mx-1">/</span>
          <Link href="/about/archives" className="text-usc-red underline">Archives</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">Directors</span>
        </div>
        <h1 className="text-usc-red text-center text-4xl font-caslon mb-8">Directing the Trojan Debate Squad</h1>
        <div className="text-lg text-gray-700 leading-relaxed mb-8">
          <p className="mb-4">Strong faculty leadership has been a hallmark of debate at USC. As part of the College of Oratory, founded in 1895, forensics prospered under the first faculty leadership, Dr. A. William Olmstead, an Associate Professor of Debate and Forensics in the College of Oratory.</p>
          <p className="mb-4">Dr. Olmstead helped to define what it meant to be a Director of Forensics. He coordinated the university’s travel against other universities as well as continued to nurture the burgeoning on campus debating societies. These included the Athenian society for women and the Aristotelian society for men.</p>
          <p className="mb-4">Even though each director has left a strong legacy of success, the presence of Dr. Alan Nichols is still felt today. He guided the TDS for nearly four decades and is one of the founding giants of modern inter-collegiate debate.</p>
          <p className="mb-4">A select few have served as either the TDS Director of Forensics or Debate over the last 125 years. The Director of Forensics (DOF) has traditionally served as the administrative director of the program, responsible for scheduling, coaching and the many logistics that make a successful debate team possible. The Director of Debate (DOD) has traditionally served as the coach most responsible for working closely with the students to develop their arguments and argumentative skills. These positions work closely, along with the staff, to help ensure the success that is a long tradition at USC.</p>
        </div>
        <h2 className="text-usc-red text-2xl font-caslon mb-4 text-center">Directors of the TDS</h2>
        <ul className="text-lg text-gray-800 leading-relaxed list-disc list-inside max-w-xl mx-auto mb-8">
          <li>William Olmstead, 1914-1920, Director of Forensics</li>
          <li>Alan Nichols, 1921-1956, Director of Forensics</li>
          <li>Charles Redding, 1946-54, Director of Debate</li>
          <li>James H. McBath, 1956-1963, Director of Forensics</li>
          <li>John DeBross, 1964-1980, Director of Forensics</li>
          <li>Lee Garrison, 1973-1980, Director of Debate</li>
          <li>Thomas A. Hollihan, 1980-1990, Director of Forensics</li>
          <li>Robert H. Gass, 1980-1981, Director of Debate</li>
          <li>Randall A. Lake, 1981-1990, Director of Debate; 1990-1994, Director of Forensics</li>
          <li>David P. Damus, 1994-2007, Director of Forensics</li>
          <li>Gordon Stables, 2002-Present, Director of Debate; 2007-Present, Director of Forensics</li>
        </ul>
      </div>
    </main>
  );
} 