import { Metadata } from "next";
import Link from "next/link";
import { faArrowRight, faDownload, faExternalLinkAlt, faFileAlt, faBook, faVideo, faUsers, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access debate resources, evidence packets, training materials, and educational content from the USC Trojan Debate Squad.',
}

export default function Resources() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Resources</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Access debate materials, evidence packets, and educational resources
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 flex text-gray-500 text-sm py-5 gap-1">
        <Link href="/" className="text-usc-red underline hover:text-red-700">Home</Link>
        <FontAwesomeIcon icon={faArrowRight} className="my-auto" />
        <span className="text-gray-700">Resources</span>
      </div>
      <hr className="max-w-6xl mx-auto" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Quick Access */}
        <section className="mb-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-12">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="#evidence" className="bg-usc-red text-white p-6 rounded-lg text-center hover:bg-red-700 transition-colors">
              <FontAwesomeIcon icon={faFileAlt} className="text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Evidence Packets</h3>
              <p className="text-sm opacity-90">Current debate evidence and research</p>
            </Link>
            <Link href="#training" className="bg-usc-yellow text-black p-6 rounded-lg text-center hover:bg-yellow-300 transition-colors">
              <FontAwesomeIcon icon={faBook} className="text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Training Materials</h3>
              <p className="text-sm opacity-90">Debate skills and strategy guides</p>
            </Link>
            <Link href="#videos" className="bg-usc-red text-white p-6 rounded-lg text-center hover:bg-red-700 transition-colors">
              <FontAwesomeIcon icon={faVideo} className="text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Video Library</h3>
              <p className="text-sm opacity-90">Debate recordings and tutorials</p>
            </Link>
            <Link href="#external" className="bg-usc-yellow text-black p-6 rounded-lg text-center hover:bg-yellow-300 transition-colors">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">External Links</h3>
              <p className="text-sm opacity-90">Debate organizations and resources</p>
            </Link>
          </div>
        </section>

        {/* Evidence Packets */}
        <section id="evidence" className="mb-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-12">Evidence Packets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Current Topic Evidence */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-usc-red text-white p-6">
                <h3 className="text-xl font-semibold mb-2">Current Topic Evidence</h3>
                <p className="text-sm opacity-90">2024-2025 Policy Debate Topic</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive evidence packets for the current policy debate topic, 
                  including affirmative and negative arguments.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>Affirmative Evidence (PDF)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>Negative Evidence (PDF)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>Topic Analysis (PDF)</span>
                  </div>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">Evidence packet download links</p>
                </div>
              </div>
            </div>

            {/* Historical Evidence */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-usc-yellow text-black p-6">
                <h3 className="text-xl font-semibold mb-2">Historical Evidence</h3>
                <p className="text-sm opacity-90">Past Debate Topics</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Evidence packets from previous debate seasons, organized by topic 
                  and academic year.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>2023-2024 Topic (PDF)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>2022-2023 Topic (PDF)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>Archive (ZIP)</span>
                  </div>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">Historical evidence archive</p>
                </div>
              </div>
            </div>

            {/* Research Tools */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-usc-red text-white p-6">
                <h3 className="text-xl font-semibold mb-2">Research Tools</h3>
                <p className="text-sm opacity-90">Debate Research Resources</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Tools and resources for conducting debate research, including 
                  databases, citation guides, and research methodologies.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>Research Guide (PDF)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>Citation Format (PDF)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDownload} className="text-usc-red" />
                    <span>Database Access (PDF)</span>
                  </div>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">Research tools and guides</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Materials */}
        <section id="training" className="mb-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-12">Training Materials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Beginner Resources */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-usc-red mb-6">Beginner Resources</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Debate Fundamentals</h4>
                  <p className="text-sm text-gray-600 mb-3">Introduction to policy debate structure and basic concepts</p>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">Fundamentals guide and worksheets</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Speech Structure</h4>
                  <p className="text-sm text-gray-600 mb-3">Templates and outlines for constructing debate speeches</p>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">Speech templates and examples</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Cross-Examination</h4>
                  <p className="text-sm text-gray-600 mb-3">Techniques and strategies for effective cross-examination</p>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">Cross-ex techniques and practice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Resources */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-usc-red mb-6">Advanced Resources</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Advanced Theory</h4>
                  <p className="text-sm text-gray-600 mb-3">Debate theory, kritiks, and advanced argumentation</p>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">Theory guides and examples</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Flow Techniques</h4>
                  <p className="text-sm text-gray-600 mb-3">Advanced flowing and note-taking strategies</p>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">Flow templates and techniques</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Tournament Prep</h4>
                  <p className="text-sm text-gray-600 mb-3">Tournament preparation and competitive strategies</p>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">Tournament prep checklists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Library */}
        <section id="videos" className="mb-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-12">Video Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Debate Rounds */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-6 text-center min-h-[200px] flex flex-col justify-center">
                <FontAwesomeIcon icon={faVideo} className="text-4xl text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Sample Debate Rounds</h3>
                <p className="text-sm text-gray-500">High-quality recordings of competitive debate rounds</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faTrophy} className="text-usc-red" />
                    <span>NDT Finals 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faTrophy} className="text-usc-red" />
                    <span>CEDA Finals 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faTrophy} className="text-usc-red" />
                    <span>USC vs UCLA 2024</span>
                  </div>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">Video player and archive</p>
                </div>
              </div>
            </div>

            {/* Training Videos */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-6 text-center min-h-[200px] flex flex-col justify-center">
                <FontAwesomeIcon icon={faBook} className="text-4xl text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Training Videos</h3>
                <p className="text-sm text-gray-500">Instructional videos on debate skills and techniques</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faUsers} className="text-usc-red" />
                    <span>Speech Construction</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faUsers} className="text-usc-red" />
                    <span>Cross-Examination</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faUsers} className="text-usc-red" />
                    <span>Flowing Techniques</span>
                  </div>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">Training video library</p>
                </div>
              </div>
            </div>

            {/* Coach Analysis */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-6 text-center min-h-[200px] flex flex-col justify-center">
                <FontAwesomeIcon icon={faUsers} className="text-4xl text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Coach Analysis</h3>
                <p className="text-sm text-gray-500">Expert analysis and commentary on debate rounds</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faTrophy} className="text-usc-red" />
                    <span>Strategy Breakdown</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faTrophy} className="text-usc-red" />
                    <span>Argument Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faTrophy} className="text-usc-red" />
                    <span>Performance Tips</span>
                  </div>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">Coach commentary videos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* External Links */}
        <section id="external" className="mb-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-12">External Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Debate Organizations */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-usc-red mb-4">Debate Organizations</h3>
              <div className="space-y-3">
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>National Debate Tournament (NDT)</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>Cross-Examination Debate Association (CEDA)</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>American Debate Association (ADA)</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>National Parliamentary Debate Association (NPDA)</span>
                </a>
              </div>
            </div>

            {/* Research Databases */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-usc-red mb-4">Research Databases</h3>
              <div className="space-y-3">
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>LexisNexis Academic</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>JSTOR</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>Google Scholar</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>USC Libraries</span>
                </a>
              </div>
            </div>

            {/* Debate Publications */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-usc-red mb-4">Debate Publications</h3>
              <div className="space-y-3">
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>Debate Research Online</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>Contemporary Argumentation</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>Argumentation and Advocacy</span>
                </a>
                <a href="#" className="block text-usc-red hover:underline flex items-center gap-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  <span>Debate Central</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Access Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-12">Access Information</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-usc-red mb-4">For Team Members</h3>
                <p className="text-gray-700 mb-4">
                  Current USC Trojan Debate Squad members have full access to all resources, 
                  including evidence packets, training materials, and video archives.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Full access to evidence packets</li>
                  <li>• Training materials and guides</li>
                  <li>• Video library access</li>
                  <li>• Research database access</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-usc-red mb-4">For External Users</h3>
                <p className="text-gray-700 mb-4">
                  Some resources are available to the public, while others require 
                  special access or partnership agreements.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Limited access to training materials</li>
                  <li>• Public debate recordings</li>
                  <li>• External resource links</li>
                  <li>• Contact for partnership opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-caslon mb-4">Need Help?</h2>
          <p className="text-xl mb-6">
            Can&apos;t find what you&apos;re looking for? Contact us for assistance with resources or access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/prospects" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-usc-red transition-colors"
            >
              Join the Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 