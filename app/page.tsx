import { Metadata } from "next";
//Images
import Image from "next/image";
import teamImg from '../public/static/images/Team.jpg';

export const metadata = {
  title: 'Home | USC Debate',
  description: 'Home of the championship-winning USC Debate Team, hosted by the USC Annenberg School of Communications.',
}

export default function Home() {
  return (
    <main className="bg-white">
      <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-campus1 flex h-[100vh]">
        <div className="flex pt-11 pl-8 flex-col">
          <h2 className="text-white font-semibold text-3xl rounded-md sm:px-1" >144 years of success.</h2>
          <h2 className="text-white font-semibold text-3xl rounded-md sm:px-1 bg-usc-red" >Join the <b className="text-usc-yellow">Trojan Debate Squad</b>.</h2>
        </div>
      </div>
      <div className="bg-white py-5 px-6 flex flex-col gap-6 mx-auto max-w-6xl">
        <h1 className="text-usc-red text-4xl text-center font-serif">Learn More</h1>
        <div className="flex flex-col">
          <a href="/about" className="text-usc-red text-2xl font-serif">About the Team</a>
          <p className="text-black">The Trojan Debate Squad (TDS), USC&apos;s first chartered student organization, is devoted to teaching argumentation and analytic thinking skills to students through academic debate. The TDS is one of the nation&apos;s leading collegiate debate programs and focuses on competitive policy debate and expanding debate in Los Angeles public schools.</p>
        </div>
        <div className="flex flex-col">
          <a href='/prospects' className="text-usc-red text-2xl font-serif">Join Us</a>
          <p className="text-black">Whether you&apos;re an incoming student, current trojan, or even an interested high schooler, we&apos;re always excited to have new members on the team.</p>
        </div>
        <div className="flex flex-col">
          <a href="/outreach" className="text-usc-red text-2xl font-serif">Outreach</a>
          <p className="text-black">Learn about our efforts to expand access to debate throughout Los Angeles.</p>
        </div>
        <div className="flex flex-col">
          <a href="/donate" className="text-usc-red text-2xl font-serif">Donate</a>
          <p className="text-black">We rely on the generous support of our donors and the USC Annenberg School of Communications to fund our competitive efforts.</p>
        </div>
        <div className="flex flex-col">
          <a href='/contact' className="text-usc-red text-2xl font-serif">Contact</a>
          <p className="text-black">Any questions not already covered? Feel free to reach out.</p>
        </div>
      </div>
    </main>
  );
}
