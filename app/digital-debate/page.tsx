import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Digital Debate',
  description: 'Explore USC Trojan Debate Squad\'s digital debate initiatives, including Trojan Web Debates and online debate programs.',
}

export default function DigitalDebate() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-caslon mb-6">Digital Debate</h1>
          <p className="text-xl mb-8">
            Pioneering the future of debate through technology and innovation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-usc-red text-3xl font-caslon mb-6">Trojan Web Debates</h2>
              <p className="text-lg mb-4">
                Our innovative online debate platform brings the competitive debate experience 
                to participants worldwide. Trojan Web Debates represent the cutting edge of 
                digital debate technology and accessibility.
              </p>
              <p className="text-lg mb-6">
                Through our web-based debate system, we've expanded access to competitive 
                debate beyond geographical limitations, allowing students from around the 
                globe to participate in high-quality debate competitions.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-usc-red text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-usc-red mr-2">•</span>
                    Real-time video debate sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-usc-red mr-2">•</span>
                    Digital evidence sharing and management
                  </li>
                  <li className="flex items-start">
                    <span className="text-usc-red mr-2">•</span>
                    Automated timing and speech tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-usc-red mr-2">•</span>
                    Integrated judge ballot system
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center min-h-[400px] flex flex-col justify-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-20 h-20 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Trojan Web Debates Platform</h3>
              <p className="text-sm text-gray-500">Screenshot or demo of the digital debate platform</p>
            </div>
          </div>

          {/* Research Section */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Digital Transition Research</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Technology Integration</h3>
                <p className="mb-4">
                  Our research focuses on how digital tools can enhance debate education 
                  and competitive experiences while maintaining the core values of 
                  argumentation and critical thinking.
                </p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[150px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Research findings and data visualization</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Accessibility Studies</h3>
                <p className="mb-4">
                  We investigate how digital debate platforms can increase access to 
                  competitive debate for students who might not otherwise have the 
                  opportunity to participate.
                </p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[150px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Accessibility metrics and case studies</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Future Development</h3>
                <p className="mb-4">
                  Ongoing development of new digital debate tools and platforms to 
                  further enhance the debate experience and expand our reach.
                </p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[150px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Upcoming features and roadmap</p>
                </div>
              </div>
            </div>
          </section>

          {/* Past Events Section */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Past Digital Debate Events</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-2">Spring 2024 Trojan Web Debates</h3>
                <p className="text-gray-600 mb-4">International online debate tournament featuring teams from 15+ countries</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Virtual Tournament</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">International</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Policy Debate</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-2">Digital Debate Workshop Series</h3>
                <p className="text-gray-600 mb-4">Monthly workshops teaching digital debate skills and platform usage</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Workshop</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Monthly</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Skills Training</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-2">ADDI Digital Debate Conference</h3>
                <p className="text-gray-600 mb-4">Annual conference on advancing digital debate initiatives</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Conference</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Annual</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Research</span>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-caslon mb-4">Join the Digital Debate Revolution</h2>
            <p className="text-xl mb-6">
              Experience the future of competitive debate through our innovative digital platforms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Get Involved
              </Link>
              <Link 
                href="/prospects" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-usc-red transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 