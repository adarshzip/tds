import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Learn about the programs offered by the USC Trojan Debate Squad, including high school debate, summer camps, and tournaments.'
}

export default function Programs() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-caslon mb-6">Programs</h1>
          <p className="text-xl mb-8">
            Inspiring the next generation of debaters through education and competition
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tournament Section */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Our Tournaments</h2>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">USC Trojan Invitational</h3>
                <p className="text-gray-600 mb-4">
                  Our annual tournament brings together high school debate teams from 
                  across Southern California for a weekend of competitive LD and policy debate.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Annual Tournament</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Policy Debate</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Southern California</span>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[100px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Tournament details and registration information</p>
                </div>
              </div>
            </div>
          </section>

          {/* Outreach Programs */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Los Angeles Public Schools Initiative</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-usc-red text-xl font-semibold mb-4">School Partnerships</h3>
                <p className="mb-4">
                  We partner with Los Angeles public schools to bring debate programs 
                  to students who might not otherwise have access to competitive debate.
                </p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[120px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">List of partner schools and programs</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Mentorship Program</h3>
                <p className="mb-4">
                  USC debaters serve as mentors to high school students, providing 
                  guidance, coaching, and support throughout their debate journey.
                </p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[120px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Mentor profiles and application process</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Resource Sharing</h3>
                <p className="mb-4">
                  We provide debate materials, evidence packets, and educational 
                  resources to help high school programs develop and grow.
                </p>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[120px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Resource library and access information</p>
                </div>
              </div>
            </div>
          </section>

          {/* Program Details */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Program Information</h2>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Registration &amp; Contact</h3>
                <p className="text-gray-600 mb-4">
                  For more information about our high school programs, including 
                  registration details and scholarship opportunities, please contact us.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">Registration form and application process</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">Scholarship application and requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-caslon mb-4">Join Today</h2>
            <p className="text-xl mb-6">
              Develop skills that will serve you throughout your academic and professional career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-usc-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/outreach" 
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