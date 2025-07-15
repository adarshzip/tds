import { Metadata } from "next";
import Link from "next/link";
import { faArrowLeft, faEnvelope, faGraduationCap, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Current Team Members',
  description: 'Meet the current members of the USC Trojan Debate Squad. Learn about our talented debaters, their achievements, and academic backgrounds.',
}

export default function TeamMembers() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Current Team Members</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Meet the talented debaters who represent USC in competitive policy debate
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 flex text-gray-500 text-sm py-5 gap-1">
        <Link href="/" className="text-usc-red underline hover:text-red-700">Home</Link>
        <FontAwesomeIcon icon={faArrowLeft} className="my-auto rotate-180" />
        <Link href="/about" className="text-usc-red underline hover:text-red-700">About</Link>
        <FontAwesomeIcon icon={faArrowLeft} className="my-auto rotate-180" />
        <span className="text-gray-700">Team Members</span>
      </div>
      <hr className="max-w-6xl mx-auto" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Team Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-caslon text-usc-red mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The Trojan Debate Squad consists of dedicated students from diverse academic backgrounds 
              who share a passion for competitive policy debate and critical thinking.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-usc-red text-3xl font-bold mb-2">25+</div>
              <div className="text-gray-700">Active Members</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-usc-red text-3xl font-bold mb-2">15</div>
              <div className="text-gray-700">Majors Represented</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-usc-red text-3xl font-bold mb-2">8</div>
              <div className="text-gray-700">Competitive Teams</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-usc-red text-3xl font-bold mb-2">4</div>
              <div className="text-gray-700">Years Average Experience</div>
            </div>
          </div>
        </section>

        {/* Team Members (Unified) */}
        <section className="mb-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-12">Team Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Member Cards - Combine all here */}
            {[...Array(11)].map((_, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 border-b border-gray-200 p-6 text-center min-h-[160px] flex flex-col justify-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">Member Photo</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-usc-red mb-1">[Member Name]</h3>
                  <p className="text-sm text-gray-600 mb-2">[Year] • [Major]</p>
                  <div className="flex items-center gap-2 mb-2">
                    <FontAwesomeIcon icon={faTrophy} className="text-usc-yellow" />
                    <span className="text-xs text-gray-600">[Achievement/Award]</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-3">[Brief description of debate experience, focus, and interests]</p>
                  <div className="flex items-center gap-2 text-xs">
                    <FontAwesomeIcon icon={faEnvelope} className="text-usc-red" />
                    <a href="mailto:[email]" className="text-usc-red hover:underline">[email]</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Diversity */}
        <section className="mb-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-12">Academic Diversity</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-usc-red mb-4">Majors Represented</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Political Science</li>
                  <li>• Communication</li>
                  <li>• Philosophy</li>
                  <li>• Economics</li>
                  <li>• International Relations</li>
                  <li>• Journalism</li>
                  <li>• Business Administration</li>
                  <li>• Computer Science</li>
                  <li>• Psychology</li>
                  <li>• And more...</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-usc-red mb-4">Class Years</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Freshmen: [X] members</li>
                  <li>• Sophomores: [X] members</li>
                  <li>• Juniors: [X] members</li>
                  <li>• Seniors: [X] members</li>
                  <li>• Graduate Students: [X] members</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-usc-red mb-4">Debate Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• High School Debate: [X] members</li>
                  <li>• College Debate: [X] members</li>
                  <li>• First-time Debaters: [X] members</li>
                  <li>• International Experience: [X] members</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-caslon mb-4">Join Our Team</h2>
          <p className="text-xl mb-6">
            Interested in becoming part of the Trojan Debate Squad? We welcome students of all experience levels.
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