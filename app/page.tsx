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
      <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-campus1 flex h-screen">
        <div className="flex pt-11 pl-8 flex-col">
          <h2 className="text-white font-semibold text-3xl rounded-md sm:px-1" >144 years of success.</h2>
          <h2 className="text-white font-semibold text-3xl rounded-md sm:px-1 bg-usc-red" >Join the <b className="text-usc-yellow">Trojan Debate Squad</b>.</h2>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-white py-5 px-6 flex flex-col lg:basis-3/4 gap-6 xl:pl-20 lg:py-10">
          <div className="flex flex-col">
            <h2 className="text-usc-red font-Caslon text-2xl">About the Team</h2>
            <p className="text-black lg:w-2/3">The Trojan Debate Squad (TDS), USC&apos;s first chartered student organization, is devoted to teaching argumentation and analytic thinking skills to students through academic debate. The TDS is one of the nation&apos;s leading collegiate debate programs and focuses on competitive policy debate and expanding debate in Los Angeles public schools.</p>
            <p className="text-black"><a href="/about" className="text-usc-red underline">Learn More</a>.</p>
          </div>
          <div className="flex flex-col basis-1/2">
            <h2 className="text-usc-red font-Caslon text-2xl">Join Us</h2>
            <p className="text-black lg:w-2/3">Whether you&apos;re an incoming student, current trojan, or even an interested high schooler, we&apos;re always excited to have new members on the team.</p>
            <p className="text-black"><a href="/prospects" className="text-usc-red underline">Learn More</a>.</p>
          </div>
          <div className="flex flex-col basis-1/2">
            <h2 className="text-usc-red font-Caslon text-2xl">Outreach</h2>
            <p className="text-black lg:w-2/3"><a href="/outreach" className="text-usc-red underline">Learn more</a> about our efforts to expand access to debate throughout Los Angeles.</p>
          </div>
          <div className="flex flex-col basis-1/2">
            <h2 className="text-usc-red font-Caslon text-2xl">Donate</h2>
            <p className="text-black lg:w-2/3">We rely on the generous support of our donors and the USC Annenberg School of Communications to fund our competitive efforts.</p>
            <p className="text-black"><a href="/donate" className="text-usc-red underline">Learn More</a>.</p>
          </div>
          <div className="flex flex-col basis-1/2">
            <h2 className="text-usc-red font-Caslon text-2xl">Contact</h2>
            <p className="text-black lg:w-2/3">Any questions not already covered? Feel free to <a href="/contact" className="text-usc-red underline">reach out</a>.</p>
          </div>
        </div>
        <Image
          src={teamImg}
          alt = "Image of a few members of the USC Debate Team standing in a parking lot, smiling."
          style={{
            maxHeight: '500px',
            height: 'auto',
            width: 'auto',
          }}
        />
      </div>
    </main>
  );
}
