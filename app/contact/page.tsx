import { Metadata } from "next";
import Link from "next/link";
import { faArrowRight, faEnvelope, faPhone, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram as faInstagramBrand, faTwitter as faTwitterBrand, faLinkedin as faLinkedinBrand } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Contact the USC Trojan Debate Squad | USC Debate Team',
  description: 'Get in touch with the USC Trojan Debate Squad, the official USC Debate Team. Contact our coaches, visit our office, or reach out through social media. Join our 145-year tradition of debate excellence.',
}

export default function Contact() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Contact the USC Trojan Debate Squad</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Get in touch with the <strong>USC Debate Team</strong>. We&apos;re here to answer your questions and help you get involved with the Trojan Debate Squad.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 flex text-gray-500 text-sm py-5 gap-1">
        <Link href="/" className="text-usc-red underline hover:text-red-700">Home</Link>
        <FontAwesomeIcon icon={faArrowRight} className="my-auto" />
        <span className="text-gray-700">Contact</span>
      </div>
      <hr className="max-w-6xl mx-auto" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faEnvelope} className="text-usc-red text-lg" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:debate@usc.edu" className="text-usc-red hover:underline">Coming Soon</a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-usc-red text-lg mt-1" />
                      <div>
                        <h3 className="font-semibold">Office</h3>
                        <p className="text-sm text-gray-700">ASC 330</p>
                        <p className="text-sm text-gray-700">3502 Watt Way, Los Angeles, CA 90089</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media - Now as a separate, more prominent section */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-usc-red mb-3">Follow Us on Social Media</h3>
                    <p className="text-gray-600 mb-4">Stay connected for updates, tournament results, and team news</p>
                    <div className="flex justify-center gap-4">
                      <a 
                        href="https://www.instagram.com/usctrojandebate/" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        aria-label="Follow us on Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagramBrand} className="text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">Key Personnel</h2>
              <div className="space-y-6">
                {/* Person 1 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-w-[80px] min-h-[80px] flex flex-col justify-center">
                      <div className="text-gray-400">
                        <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-usc-red mb-1">[Person Name]</h3>
                      <p className="text-gray-600 font-medium mb-2">[Title/Role]</p>
                      <p className="text-sm text-gray-600 mb-3">
                        [Brief description of responsibilities and expertise]
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faEnvelope} className="text-usc-red" />
                          <a href="mailto:[email]" className="text-usc-red hover:underline">[email@usc.edu]</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faPhone} className="text-usc-red" />
                          <a href="tel:[phone]" className="text-usc-red hover:underline">[(213) XXX-XXXX]</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faClock} className="text-usc-red" />
                          <span className="text-gray-600">Office Hours: [Days and Times]</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Person 2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-w-[80px] min-h-[80px] flex flex-col justify-center">
                      <div className="text-gray-400">
                        <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-usc-red mb-1">[Person Name]</h3>
                      <p className="text-gray-600 font-medium mb-2">[Title/Role]</p>
                      <p className="text-sm text-gray-600 mb-3">
                        [Brief description of responsibilities and expertise]
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faEnvelope} className="text-usc-red" />
                          <a href="mailto:[email]" className="text-usc-red hover:underline">[email@usc.edu]</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faPhone} className="text-usc-red" />
                          <a href="tel:[phone]" className="text-usc-red hover:underline">[(213) XXX-XXXX]</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faClock} className="text-usc-red" />
                          <span className="text-gray-600">Office Hours: [Days and Times]</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Person 3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-w-[80px] min-h-[80px] flex flex-col justify-center">
                      <div className="text-gray-400">
                        <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-usc-red mb-1">[Person Name]</h3>
                      <p className="text-gray-600 font-medium mb-2">[Title/Role]</p>
                      <p className="text-sm text-gray-600 mb-3">
                        [Brief description of responsibilities and expertise]
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faEnvelope} className="text-usc-red" />
                          <a href="mailto:[email]" className="text-usc-red hover:underline">[email@usc.edu]</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faPhone} className="text-usc-red" />
                          <a href="tel:[phone]" className="text-usc-red hover:underline">[(213) XXX-XXXX]</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faClock} className="text-usc-red" />
                          <span className="text-gray-600">Office Hours: [Days and Times]</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">Quick Links</h2>
              <div className="space-y-4">
                <Link 
                  href="/recruiting" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-usc-red">Join the Team</h3>
                  <p className="text-sm text-gray-600">Learn how to become a member of the Trojan Debate Squad</p>
                </Link>
                <Link 
                  href="/about" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-usc-red">About the Team</h3>
                  <p className="text-sm text-gray-600">Learn about our history, coaches, and achievements</p>
                </Link>
                <Link 
                  href="/outreach" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-usc-red">Community Outreach</h3>
                  <p className="text-sm text-gray-600">Discover our programs for schools and organizations</p>
                </Link>
                <Link 
                  href="/donate" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-usc-red">Support the Team</h3>
                  <p className="text-sm text-gray-600">Learn about donation opportunities and ways to give</p>
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-8">Find Us on Campus</h2>
          <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-usc-red mb-6 text-center">Building Location</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Annenberg School for Communication &amp; Journalism</h4>
                <p className="text-gray-700">ASC 330 (Third Floor)</p>
                <p className="text-gray-700">3502 Watt Way</p>
                <p className="text-gray-700">Los Angeles, CA 90089</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Facilities</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Main office and administrative space</li>
                  <li>• Dedicated practice rooms</li>
                  <li>• Evidence library and research materials</li>
                  <li>• Conference room for team meetings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Access</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• USC ID required for campus access</li>
                  <li>• Accessible entrance on north side</li>
                  <li>• Elevators available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-usc-red mb-2">How can I join the team?</h3>
              <p className="text-gray-700 text-sm">
                Visit our <Link href="/recruiting" className="text-usc-red hover:underline">Join the Team</Link> page for detailed information about joining the Trojan Debate Squad.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-usc-red mb-2">When are practices held?</h3>
              <p className="text-gray-700 text-sm">
                Regular practices are held Wednesdays from 5:30-7:30 PM in ASC 330.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 