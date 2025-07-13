import { Metadata } from "next";
import Link from "next/link";
import { faArrowRight, faEnvelope, faPhone, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram as faInstagramBrand, faTwitter as faTwitterBrand, faLinkedin as faLinkedinBrand } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the USC Trojan Debate Squad. Contact our coaches, visit our office, or reach out through social media.',
}

export default function Contact() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Get in touch with the Trojan Debate Squad. We're here to answer your questions 
            and help you get involved.
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-usc-red mt-1">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:debate@usc.edu" className="text-usc-red hover:underline">debate@usc.edu</a>
                    <p className="text-sm text-gray-600 mt-1">General inquiries and information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-usc-red mt-1">
                    <FontAwesomeIcon icon={faPhone} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:+1-213-740-0900" className="text-usc-red hover:underline">(213) 740-0900</a>
                    <p className="text-sm text-gray-600 mt-1">Office phone - call during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-usc-red mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Location</h3>
                    <p className="text-gray-700">ASC 200</p>
                    <p className="text-gray-700">Annenberg School for Communication & Journalism</p>
                    <p className="text-gray-700">3502 Watt Way</p>
                    <p className="text-gray-700">Los Angeles, CA 90089</p>
                    <p className="text-sm text-gray-600 mt-1">Main office and practice facilities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-usc-red mt-1">
                    <FontAwesomeIcon icon={faClock} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-sm text-gray-600 mt-1">Pacific Time Zone</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-caslon text-usc-red mb-6">Contact Methods</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Primary Contact</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <FontAwesomeIcon icon={faEnvelope} className="text-usc-red" />
                      <span className="font-medium">General Inquiries</span>
                    </div>
                    <a href="mailto:debate@usc.edu" className="text-usc-red hover:underline">debate@usc.edu</a>
                    <p className="text-sm text-gray-600 mt-1">Response time: Within 24-48 hours</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Emergency Contact</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <FontAwesomeIcon icon={faPhone} className="text-usc-red" />
                      <span className="font-medium">Urgent Matters</span>
                    </div>
                    <a href="tel:+1-213-740-0900" className="text-usc-red hover:underline">(213) 740-0900</a>
                    <p className="text-sm text-gray-600 mt-1">Available during office hours only</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Social Media</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/usctrojandebate/" 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                      aria-label="Follow us on Instagram"
                    >
                      <FontAwesomeIcon icon={faInstagramBrand} className="text-2xl" />
                    </a>
                    <a 
                      href="https://twitter.com/usctrojandebate" 
                      className="bg-blue-500 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                      aria-label="Follow us on Twitter"
                    >
                      <FontAwesomeIcon icon={faTwitterBrand} className="text-2xl" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/usc-trojan-debate-squad" 
                      className="bg-blue-700 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                      aria-label="Follow us on LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedinBrand} className="text-2xl" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Follow us for updates, tournament results, and team news</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Mailing Address</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-usc-red mt-1" />
                      <span className="font-medium">USC Trojan Debate Squad</span>
                    </div>
                    <div className="text-gray-700">
                      <p>Annenberg School for Communication & Journalism</p>
                      <p>ASC 200</p>
                      <p>3502 Watt Way</p>
                      <p>Los Angeles, CA 90089</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">For official correspondence and documents</p>
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
                  href="/prospects" 
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

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-caslon text-usc-red mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-usc-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-usc-red focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-usc-red focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-usc-red focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-usc-red focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="join">Joining the Team</option>
                  <option value="outreach">Community Outreach</option>
                  <option value="donation">Donation/Support</option>
                  <option value="tournament">Tournament Information</option>
                  <option value="media">Media Inquiries</option>
                  <option value="alumni">Alumni Relations</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-usc-red focus:border-transparent resize-vertical"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>
              
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 h-4 w-4 text-usc-red focus:ring-usc-red border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Subscribe to our newsletter for team updates, tournament results, and upcoming events
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-usc-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-8">Find Us on Campus</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-usc-red mb-4">Building Location</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Annenberg School for Communication & Journalism</h4>
                  <p className="text-gray-700">ASC 200 (Second Floor)</p>
                  <p className="text-gray-700">3502 Watt Way</p>
                  <p className="text-gray-700">Los Angeles, CA 90089</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Facilities</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Main office and administrative space</li>
                    <li>• Dedicated practice rooms</li>
                    <li>• Evidence library and research materials</li>
                    <li>• Computer workstations for debate prep</li>
                    <li>• Conference room for team meetings</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Access</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• USC ID required for building access</li>
                    <li>• Visitors must check in at front desk</li>
                    <li>• Accessible entrance on north side</li>
                    <li>• Elevator available to second floor</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-usc-red mb-4">Getting Here</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Parking</h4>
                  <p className="text-gray-700 mb-2">USC Parking Structure D</p>
                  <p className="text-sm text-gray-600">Located at 3601 Watt Way, adjacent to the Annenberg building</p>
                  <p className="text-sm text-gray-600">Daily parking: $20 | USC permit holders: Free</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Public Transit</h4>
                  <p className="text-gray-700 mb-2">Metro Expo Line - USC Station</p>
                  <p className="text-sm text-gray-600">Exit at Jefferson/USC Station, walk 5 minutes north</p>
                  <p className="text-sm text-gray-600">Bus routes: 38, 102, 200, 204, 754</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Walking Directions</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• From USC Village: 5 minutes south</li>
                    <li>• From Tommy Trojan: 8 minutes west</li>
                    <li>• From Doheny Library: 10 minutes northwest</li>
                    <li>• From Leavey Library: 7 minutes southwest</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Campus Map</h4>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[120px] flex flex-col justify-center">
                    <p className="text-sm text-gray-500">Interactive campus map showing building location</p>
                  </div>
                </div>
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
                Visit our <Link href="/prospects" className="text-usc-red hover:underline">Join the Team</Link> page for detailed information about joining the Trojan Debate Squad.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-usc-red mb-2">Do I need debate experience?</h3>
              <p className="text-gray-700 text-sm">
                No! We welcome students of all experience levels and provide comprehensive training for beginners.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-usc-red mb-2">When are practices held?</h3>
              <p className="text-gray-700 text-sm">
                Regular practices are held Monday, Wednesday, and Friday from 4:00-6:00 PM in the Annenberg building.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-usc-red mb-2">How can my school partner with USC?</h3>
              <p className="text-gray-700 text-sm">
                Visit our <Link href="/outreach" className="text-usc-red hover:underline">Community Outreach</Link> page to learn about partnership opportunities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 