import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home | USC Trojan Debate Squad | USC Debate Team',
  description: 'Home of the championship-winning USC Trojan Debate Squad, hosted by the USC Annenberg School of Communications. Join our 145-year tradition of excellence in policy debate as part of the official USC Debate Team.',
}

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-no-repeat bg-cover bg-center bg-campus1 flex h-screen relative">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex pt-11 px-8 flex-col justify-center items-center text-center md:items-start md:text-left">
          <h2 className="text-white font-semibold text-4xl md:text-5xl rounded-md sm:px-1 mb-4">
            145 years of success.
          </h2>
          <h2 className="text-white font-semibold text-4xl md:text-5xl rounded-md sm:px-1 bg-usc-red bg-opacity-90 p-2 mb-8">
            Join the <span className="text-usc-yellow">USC Trojan Debate Squad</span>.
          </h2>
          <Link
            href="/recruiting"
            className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
          >
            Join the Team
          </Link>
        </div>
      </div>

      {/* About the Team */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-usc-red text-5xl font-caslon mb-6">About the Team</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Trojan Debate Squad (TDS), USC&apos;s first chartered student organization, is devoted to teaching
            argumentation and analytic thinking skills through academic debate. Founded in 1880, TDS is one of the
            nation&apos;s leading collegiate debate programs, competing at regional and national tournaments including
            NDT and CEDA. We are hosted by the USC Annenberg School for Communication &amp; Journalism.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-caslon mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Join the Trojan Debate Squad and develop the critical thinking, research, and communication
            skills that will serve you throughout your academic and professional career.
          </p>
          <Link
            href="/recruiting"
            className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Join the Team
          </Link>
        </div>
      </div>
    </main>
  );
}
