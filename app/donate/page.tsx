import { Metadata } from "next";
import Link from "next/link";
import { faArrowRight, faGift, faHeart, faTrophy, faGraduationCap, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Support the Team',
  description: 'Support the USC Trojan Debate Squad through your generous donations. Help us continue our championship-winning tradition and expand debate access throughout Los Angeles.',
}

export default function Donate() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Support the Trojan Debate Squad</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Your generous support helps us maintain our championship-winning tradition 
            and expand debate access throughout Los Angeles
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 flex text-gray-500 text-sm py-5 gap-1">
        <Link href="/" className="text-usc-red underline hover:text-red-700">Home</Link>
        <FontAwesomeIcon icon={faArrowRight} className="my-auto" />
        <span className="text-gray-700">Support the Team</span>
      </div>
      <hr className="max-w-6xl mx-auto" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Why Support Us */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-caslon text-usc-red mb-6">Why Support the Trojan Debate Squad?</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            For over 140 years, the Trojan Debate Squad has been USC's first chartered student organization, 
            representing excellence in policy debate and critical thinking. Your support ensures this legacy continues.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faTrophy} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-usc-red mb-2">Championship Excellence</h3>
              <p className="text-gray-700">Support our continued success at national tournaments including NDT and CEDA</p>
            </div>
            <div className="text-center">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-usc-red mb-2">Educational Impact</h3>
              <p className="text-gray-700">Help develop critical thinking and communication skills in future leaders</p>
            </div>
            <div className="text-center">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-usc-red mb-2">Community Outreach</h3>
              <p className="text-gray-700">Expand debate access to underserved communities throughout Los Angeles</p>
            </div>
          </div>
        </section>

        {/* What Your Support Funds */}
        <section className="mb-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-12">What Your Support Funds</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-usc-red mb-4">Tournament Travel & Expenses</h3>
              <p className="text-gray-700 mb-4">
                Your donations help cover the costs of traveling to regional and national tournaments, 
                including transportation, lodging, and registration fees.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Airfare and ground transportation</li>
                <li>• Hotel accommodations</li>
                <li>• Tournament registration fees</li>
                <li>• Equipment and materials</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-usc-red mb-4">Coaching & Training</h3>
              <p className="text-gray-700 mb-4">
                Support our coaching staff and training programs that develop the next generation 
                of champion debaters.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Professional coaching staff</li>
                <li>• Training materials and resources</li>
                <li>• Practice facilities and equipment</li>
                <li>• Research databases and subscriptions</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-usc-red mb-4">Community Outreach Programs</h3>
              <p className="text-gray-700 mb-4">
                Help us expand debate education to high schools and communities throughout 
                Los Angeles that lack access to debate programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High school mentorship programs</li>
                <li>• Community workshops and clinics</li>
                <li>• Equipment and resource sharing</li>
                <li>• Tournament hosting and support</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-usc-red mb-4">Team Development</h3>
              <p className="text-gray-700 mb-4">
                Support team building activities, leadership development, and opportunities 
                for personal and professional growth.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Team retreats and bonding activities</li>
                <li>• Leadership development programs</li>
                <li>• Professional networking opportunities</li>
                <li>• Alumni engagement initiatives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Donation Levels */}
        <section className="mb-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-12">Donation Levels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center hover:border-usc-red transition-colors">
              <h3 className="text-2xl font-semibold text-usc-red mb-2">Friend</h3>
              <div className="text-3xl font-bold text-gray-800 mb-4">$50</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Recognition in team newsletter</li>
                <li>• Invitation to team events</li>
                <li>• Thank you letter from team</li>
              </ul>
              <button className="w-full bg-usc-red text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                Donate $50
              </button>
            </div>
            <div className="bg-white border-2 border-usc-red p-6 rounded-lg text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-usc-yellow text-black px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-semibold text-usc-red mb-2">Supporter</h3>
              <div className="text-3xl font-bold text-gray-800 mb-4">$100</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• All Friend benefits</li>
                <li>• Name on team website</li>
                <li>• Tournament updates</li>
                <li>• Team photo</li>
              </ul>
              <button className="w-full bg-usc-red text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                Donate $100
              </button>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center hover:border-usc-red transition-colors">
              <h3 className="text-2xl font-semibold text-usc-red mb-2">Patron</h3>
              <div className="text-3xl font-bold text-gray-800 mb-4">$250</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• All Supporter benefits</li>
                <li>• VIP tournament access</li>
                <li>• Personal thank you from coaches</li>
                <li>• Team merchandise</li>
              </ul>
              <button className="w-full bg-usc-red text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                Donate $250
              </button>
            </div>
            <div className="bg-white border-2 border-usc-yellow p-6 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-usc-red mb-2">Champion</h3>
              <div className="text-3xl font-bold text-gray-800 mb-4">$500+</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• All Patron benefits</li>
                <li>• Named scholarship opportunity</li>
                <li>• Private team dinner</li>
                <li>• Legacy recognition</li>
              </ul>
              <button className="w-full bg-usc-red text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                Donate $500+
              </button>
            </div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="mb-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-12">Other Ways to Give</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Matching Gifts</h3>
              <p className="mb-4">
                Many employers offer matching gift programs that can double or triple your donation. 
                Check with your company's HR department to see if they match charitable contributions.
              </p>
              <p className="text-sm opacity-90">
                USC Trojan Debate Squad is a registered 501(c)(3) organization, 
                making your donation tax-deductible.
              </p>
            </div>
            <div className="bg-usc-yellow text-black p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Planned Giving</h3>
              <p className="mb-4">
                Consider including the Trojan Debate Squad in your estate planning. 
                Planned gifts can provide significant tax benefits while ensuring 
                the future of debate at USC.
              </p>
              <p className="text-sm opacity-90">
                Contact us to discuss planned giving options and how your legacy 
                can support future generations of Trojan debaters.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-4xl font-caslon text-usc-red mb-6">Questions About Giving?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We're here to help you make the most of your support. Contact us to discuss 
            donation options, matching gifts, or any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-usc-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:debate@usc.edu" 
              className="border-2 border-usc-red text-usc-red px-8 py-3 rounded-lg font-semibold hover:bg-usc-red hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
} 