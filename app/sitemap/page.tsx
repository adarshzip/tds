import { Metadata } from "next";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap of the USC Trojan Debate Squad website. Find all pages and sections easily.',
}

export default function Sitemap() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Sitemap</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Complete navigation guide for the USC Trojan Debate Squad website
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 flex text-gray-500 text-sm py-5 gap-1">
        <Link href="/" className="text-usc-red underline hover:text-red-700">Home</Link>
        <FontAwesomeIcon icon={faArrowRight} className="my-auto" />
        <span className="text-gray-700">Sitemap</span>
      </div>
      <hr className="max-w-6xl mx-auto" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-caslon text-usc-red mb-6">Main Pages</h2>
            <div className="space-y-3">
              <Link href="/" className="block text-usc-red hover:underline">
                Home
              </Link>
              <Link href="/about" className="block text-usc-red hover:underline">
                About the Team
              </Link>
              <Link href="/prospects" className="block text-usc-red hover:underline">
                Join the Team
              </Link>
              <Link href="/outreach" className="block text-usc-red hover:underline">
                Community Outreach
              </Link>
              <Link href="/donate" className="block text-usc-red hover:underline">
                Support the Team
              </Link>
              <Link href="/contact" className="block text-usc-red hover:underline">
                Contact Us
              </Link>
            </div>
          </section>

          {/* About Section */}
          <section>
            <h2 className="text-2xl font-caslon text-usc-red mb-6">About Section</h2>
            <div className="space-y-3">
              <Link href="/about" className="block text-usc-red hover:underline">
                About the Team
              </Link>
              <Link href="/about/history" className="block text-usc-red hover:underline">
                Team History
              </Link>
              <Link href="/about/history/NDT" className="block text-usc-red hover:underline">
                NDT History
              </Link>
              <Link href="/about/history/directors" className="block text-usc-red hover:underline">
                Past Directors
              </Link>
            </div>
          </section>

          {/* Information */}
          <section>
            <h2 className="text-2xl font-caslon text-usc-red mb-6">Information</h2>
            <div className="space-y-3">
              <Link href="/prospects" className="block text-usc-red hover:underline">
                How to Join
              </Link>
              <Link href="/outreach" className="block text-usc-red hover:underline">
                Outreach Programs
              </Link>
              <Link href="/donate" className="block text-usc-red hover:underline">
                Donation Options
              </Link>
              <Link href="/contact" className="block text-usc-red hover:underline">
                Contact Information
              </Link>
            </div>
          </section>
        </div>

        {/* Quick Links */}
        <section className="mt-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-8">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/prospects" 
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-usc-red mb-2">Join the Team</h3>
              <p className="text-sm text-gray-600">Learn how to become a member</p>
            </Link>
            <Link 
              href="/about" 
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-usc-red mb-2">About Us</h3>
              <p className="text-sm text-gray-600">Learn about our history and coaches</p>
            </Link>
            <Link 
              href="/outreach" 
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-usc-red mb-2">Outreach</h3>
              <p className="text-sm text-gray-600">Community programs and partnerships</p>
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-usc-red mb-2">Contact</h3>
              <p className="text-sm text-gray-600">Get in touch with our team</p>
            </Link>
          </div>
        </section>

        {/* External Links */}
        <section className="mt-16">
          <h2 className="text-3xl font-caslon text-usc-red text-center mb-8">External Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-usc-red mb-4">Social Media</h3>
              <div className="space-y-2">
                <a 
                  href="https://www.instagram.com/usctrojandebate/" 
                  className="block text-usc-red hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a 
                  href="https://twitter.com/usctrojandebate" 
                  className="block text-usc-red hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a 
                  href="https://www.linkedin.com/company/usc-trojan-debate-squad" 
                  className="block text-usc-red hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-usc-red mb-4">USC Resources</h3>
              <div className="space-y-2">
                <a 
                  href="https://annenberg.usc.edu/" 
                  className="block text-usc-red hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  USC Annenberg School
                </a>
                <a 
                  href="https://www.usc.edu/" 
                  className="block text-usc-red hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  USC Main Website
                </a>
                <a 
                  href="https://www.usc.edu/admission/" 
                  className="block text-usc-red hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  USC Admissions
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 