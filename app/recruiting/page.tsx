import { Metadata } from "next";
import Link from "next/link";
import { faArrowRight, faCalendarAlt, faMapMarkerAlt, faEnvelope, faPhone, faFileAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Join the USC Trojan Debate Squad | USC Debate Team',
  description: 'Interested in joining the USC Debate Team? Learn how to become part of the USC Trojan Debate Squad, see our practice schedule, and discover what makes us a top collegiate debate program.',
  openGraph: {
    title: 'Join the USC Trojan Debate Squad | USC Debate Team',
    description: 'Interested in joining the USC Debate Team? Learn how to become part of the USC Trojan Debate Squad, see our practice schedule, and discover what makes us a top collegiate debate program.',
    url: 'https://uscdebate.com/recruiting',
    siteName: 'USC Trojan Debate Squad',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join the USC Trojan Debate Squad | USC Debate Team',
    description: 'Interested in joining the USC Debate Team? Learn how to become part of the USC Trojan Debate Squad, see our practice schedule, and discover what makes us a top collegiate debate program.',
  },
}

export default function Recruiting() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Join the USC Trojan Debate Squad</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Whether you&apos;re an incoming student, current Trojan, or interested high schooler, we&apos;re always excited to welcome new members to the championship-winning <strong>USC Debate Team</strong>.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Why Join Section - Placeholder for Recruitment Blurb */}
        <section className="mb-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-8">Why Join the Trojan Debate Squad?</h2>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The USC Trojan Debate Squad is USC&apos;s first chartered student organization devoted to teaching argumentation and analytic thinking skills to students through academic debate. The TDS is one of the nation&apos;s leading collegiate debate programs. Join us to develop your public speaking, critical thinking, and research skills while representing USC at regional and national tournaments.                
            </p>
          </div>        
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">Who Can Join?</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-usc-red mb-2">Current USC Students</h3>
                  <p className="text-gray-700">
                    All USC undergraduate and graduate students are welcome to join, regardless of major.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-usc-red mb-2">Incoming Students</h3>
                  <p className="text-gray-700">
                    Prospective students can learn about the team and prepare to join once they arrive on campus.
                  </p>
                </div>

              </div>
            </section>

            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">What We Offer</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-usc-yellow rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Comprehensive Training</h3>
                    <p className="text-gray-700">Learn policy debate fundamentals from experienced coaches and team members.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-usc-yellow rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Competitive Experience</h3>
                    <p className="text-gray-700">Compete at regional and national tournaments including NDT and CEDA.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-usc-yellow rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Academic Excellence</h3>
                    <p className="text-gray-700">Develop critical thinking, research, and public speaking skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-usc-yellow rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Community Outreach</h3>
                    <p className="text-gray-700">Participate in our programs to expand debate access in Los Angeles.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">Practice Schedule</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-usc-red" />
                  <div>
                    <h3 className="font-semibold">Regular Practices</h3>
                    <p className="text-gray-700">Wednesday • 5:30 PM - 7:30 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-usc-red" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-700">ASC 330</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-usc-red" />
                  <div>
                    <h3 className="font-semibold">Tournament Weekends</h3>
                    <p className="text-gray-700">Additional practices and travel throughout the academic year</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">How to Get Started</h2>
              <div className="space-y-4">
                <div className="bg-usc-red text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Step 1: Read our FAQ Page</h3>
                  <p>You can download it <a href="/faq" className="text-white underline hover:text-usc-yellow">here</a>.</p>
                </div>
                <div className="bg-usc-yellow text-black p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Step 2: Submit Interest Form</h3>
                  <p>You can fill it out <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4HOljBLr5r6Ep-kaYrBFNmYVQJPFCB6a_eiLNatRrTscyzw/viewform" className="underline hover:text-red-700">here</a>.</p>
                </div>
                <div className="bg-usc-red text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Step 3: Meet with the Team</h3>
                  <p>Get to know the team and answer any questions you have.</p>
                </div>
                <div className="bg-usc-yellow text-black p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Step 4: Fill out Scholarship Form</h3>
                  <p>After submitting your application, fill out <a href="https://forms.gle/a4EZWkg1guvtEFMm7" className="underline hover:text-red-700">this</a> form to apply for a scholarship.</p>
                </div>
              </div>
            </section>
          </div>
        </div>


        {false && (
          <section className="mt-16">
            <h2 className="text-4xl font-caslon text-usc-red text-center mb-8">Interested High Schoolers</h2>
            <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-caslon text-center mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faEnvelope} className="text-usc-yellow" />
                      <div>
                        <h4 className="font-semibold">Primary Contact Email</h4>
                        <p className="text-sm opacity-90">[Add primary recruitment email]</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faPhone} className="text-usc-yellow" />
                      <div>
                        <h4 className="font-semibold">Recruitment Phone</h4>
                        <p className="text-sm opacity-90">[Add recruitment phone number]</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-usc-yellow" />
                      <div>
                        <h4 className="font-semibold">Office Hours</h4>
                        <p className="text-sm opacity-90">[Add specific office hours for recruitment meetings]</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-10 p-4 rounded border-2 border-dashed border-white border-opacity-30">
                      <h4 className="font-semibold mb-2">Recruitment Coordinator</h4>
                      <p className="text-sm opacity-90">[Add name and contact info for recruitment coordinator]</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded border-2 border-dashed border-white border-opacity-30">
                      <h4 className="font-semibold mb-2">Student Recruitment Team</h4>
                      <p className="text-sm opacity-90">[Add contact info for student recruitment representatives]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-usc-red to-red-800 text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-caslon mb-4">Ready to Join?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Don&apos;t wait to start your debate journey. Contact us today to learn more about joining the Trojan Debate Squad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {false && (
              <Link 
                href="/contact" 
                className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Contact Us
              </Link>
            )}
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-usc-red transition-colors"
            >
              Learn More About the Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

