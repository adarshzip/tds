import { Metadata } from "next";
import Link from "next/link";
import { faArrowRight, faCalendarAlt, faMapMarkerAlt, faEnvelope, faPhone, faFileAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Join the Team',
  description: 'Join the USC Trojan Debate Squad - Learn about requirements, practice schedule, and how to get involved with our championship-winning debate team.',
}

export default function Prospects() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Join the Trojan Debate Squad</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Whether you're an incoming student, current Trojan, or interested high schooler, 
            we're always excited to welcome new members to our championship-winning team.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 flex text-gray-500 text-sm py-5 gap-1">
        <Link href="/" className="text-usc-red underline hover:text-red-700">Home</Link>
        <FontAwesomeIcon icon={faArrowRight} className="my-auto" />
        <span className="text-gray-700">Join the Team</span>
      </div>
      <hr className="max-w-6xl mx-auto" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Why Join Section - Placeholder for Recruitment Blurb */}
        <section className="mb-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-8">Why Join the Trojan Debate Squad?</h2>
          <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-caslon mb-6">Recruitment Blurb</h3>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg border-2 border-dashed border-white border-opacity-30">
                <p className="text-lg italic">
                  [Placeholder for compelling recruitment message about why students should join the Trojan Debate Squad. 
                  This section should highlight the unique opportunities, benefits, and experiences that make TDS special.]
                </p>
                <p className="text-sm mt-4 opacity-90">
                  Add your recruitment blurb here to inspire potential team members and showcase what makes 
                  the Trojan Debate Squad an exceptional opportunity for personal and academic growth.
                </p>
              </div>
            </div>
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
                    All USC undergraduate and graduate students are welcome to join, regardless of major or debate experience.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-usc-red mb-2">Incoming Students</h3>
                  <p className="text-gray-700">
                    Prospective students can learn about the team and prepare to join once they arrive on campus.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-usc-red mb-2">High School Students</h3>
                  <p className="text-gray-700">
                    We welcome high school students to attend practices and learn about collegiate debate.
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
                    <p className="text-gray-700">Monday, Wednesday, Friday • 4:00 PM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-usc-red" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-700">Annenberg School for Communication & Journalism</p>
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
                  <h3 className="text-xl font-semibold mb-2">Step 1: Attend a Practice</h3>
                  <p>Drop by any practice session to meet the team and see what we do.</p>
                </div>
                <div className="bg-usc-yellow text-black p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Step 2: Meet with Coaches</h3>
                  <p>Schedule a meeting with our coaching staff to discuss your goals and experience.</p>
                </div>
                <div className="bg-usc-red text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Step 3: Join the Team</h3>
                  <p>Begin training and prepare for your first tournament experience.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Relevant Links & Materials Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-8">Resources & Materials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faFileAlt} className="text-usc-red text-xl" />
                <h3 className="text-2xl font-semibold text-usc-red">Important Documents</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                  <h4 className="font-semibold text-gray-600 mb-1">Document 1</h4>
                  <p className="text-sm text-gray-500">[Add link to important document or form]</p>
                </div>
                <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                  <h4 className="font-semibold text-gray-600 mb-1">Document 2</h4>
                  <p className="text-sm text-gray-500">[Add link to important document or form]</p>
                </div>
                <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                  <h4 className="font-semibold text-gray-600 mb-1">Document 3</h4>
                  <p className="text-sm text-gray-500">[Add link to important document or form]</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faLink} className="text-usc-red text-xl" />
                <h3 className="text-2xl font-semibold text-usc-red">Useful Links</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                  <h4 className="font-semibold text-gray-600 mb-1">Link 1</h4>
                  <p className="text-sm text-gray-500">[Add relevant link with description]</p>
                </div>
                <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                  <h4 className="font-semibold text-gray-600 mb-1">Link 2</h4>
                  <p className="text-sm text-gray-500">[Add relevant link with description]</p>
                </div>
                <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                  <h4 className="font-semibold text-gray-600 mb-1">Link 3</h4>
                  <p className="text-sm text-gray-500">[Add relevant link with description]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information for Future Recruits */}
        <section className="mt-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-8">Contact Information for Future Recruits</h2>
          <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-caslon text-center mb-6">Get in Touch</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
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
                <div className="space-y-4">
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

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-usc-red to-red-800 text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-caslon mb-4">Ready to Join?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Don't wait to start your debate journey. Contact us today to learn more about joining the Trojan Debate Squad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Contact Us
            </Link>
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