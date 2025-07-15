import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faArrowRight, faTrophy, faUsers, faGraduationCap, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Home | USC Trojan Debate Squad',
  description: 'Home of the championship-winning USC Trojan Debate Squad, hosted by the USC Annenberg School of Communications. Join our 144-year tradition of excellence in policy debate.',
}

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-no-repeat bg-cover bg-center md:bg-fixed bg-campus1 flex h-screen relative">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex pt-11 px-8 flex-col justify-center items-center text-center md:items-start md:text-left">
          <h2 className="text-white font-semibold text-4xl md:text-5xl rounded-md sm:px-1 mb-4">
            144 years of success.
          </h2>
          <h2 className="text-white font-semibold text-4xl md:text-5xl rounded-md sm:px-1 bg-usc-red bg-opacity-90 p-2 mb-8">
            Join the <span className="text-usc-yellow">Trojan Debate Squad</span>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/prospects" 
              className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
            >
              Join the Team
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-usc-red transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-usc-red text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">144</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Partner Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Students Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years of Outreach</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-usc-red text-5xl text-center font-caslon mb-12">Learn More</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl" />
              </div>
              <Link href="/about" className="text-usc-red text-2xl font-caslon hover:underline block mb-4">
                About the Team
              </Link>
              <p className="text-black mb-4">
                The Trojan Debate Squad (TDS), USC&apos;s first chartered student organization, is devoted to teaching 
                argumentation and analytic thinking skills to students through academic debate. The TDS is one of 
                                  the nation&apos;s leading collegiate debate programs.
              </p>
              <Link href="/about" className="text-usc-red hover:underline flex items-center gap-2">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-4xl" />
              </div>
              <Link href='/prospects' className="text-usc-red text-2xl font-caslon hover:underline block mb-4">
                Join Us
              </Link>
              <p className="text-black mb-4">
                        Whether you&apos;re an incoming student, current Trojan, or even an interested high schooler,
        we&apos;re always excited to have new members on the team.
              </p>
              <Link href="/prospects" className="text-usc-red hover:underline flex items-center gap-2">
                Get Started <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faHandshake} className="text-4xl" />
              </div>
              <Link href="/outreach" className="text-usc-red text-2xl font-caslon hover:underline block mb-4">
                Outreach
              </Link>
              <p className="text-black mb-4">
                Learn about our efforts to expand access to debate throughout Los Angeles through 
                mentorship programs, community workshops, and school partnerships.
              </p>
              <Link href="/outreach" className="text-usc-red hover:underline flex items-center gap-2">
                Discover More <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faTrophy} className="text-4xl" />
              </div>
              <Link href="/donate" className="text-usc-red text-2xl font-caslon hover:underline block mb-4">
                Support the Team
              </Link>
              <p className="text-black mb-4">
                We rely on the generous support of our donors and the USC Annenberg School of Communications 
                to fund our competitive efforts and community outreach programs.
              </p>
              <Link href="/donate" className="text-usc-red hover:underline flex items-center gap-2">
                Donate Now <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl" />
              </div>
              <Link href='/contact' className="text-usc-red text-2xl font-caslon hover:underline block mb-4">
                Contact
              </Link>
              <p className="text-black mb-4">
                Any questions not already covered? Feel free to reach out to our coaches, 
                visit our office, or connect with us on social media.
              </p>
              <Link href="/contact" className="text-usc-red hover:underline flex items-center gap-2">
                Get in Touch <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-4xl" />
              </div>
              <Link href="/high-school" className="text-usc-red text-2xl font-caslon hover:underline block mb-4">
                High School Programs
              </Link>
              <p className="text-black mb-4">
                Discover our summer programs, tournaments, and mentorship initiatives 
                designed to inspire the next generation of debaters.
              </p>
              <Link href="/high-school" className="text-usc-red hover:underline flex items-center gap-2">
                Explore Programs <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>
          </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/prospects" 
              className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Join the Team
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-usc-red transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
