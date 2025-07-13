import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'High School Programs',
  description: 'Discover USC Trojan Debate Squad\'s high school debate programs, summer camps, and tournament opportunities for young debaters.',
}

export default function HighSchoolPrograms() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-caslon mb-6">High School Programs</h1>
          <p className="text-xl mb-8">
            Inspiring the next generation of debaters through education and competition
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Summer Program Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-usc-red text-3xl font-caslon mb-6">Draft Debate Summer Program</h2>
                <p className="text-lg mb-4">
                  Our flagship summer program offers high school students an intensive 
                  introduction to competitive policy debate. Over the course of two weeks, 
                  students develop critical thinking, research, and public speaking skills 
                  while learning from experienced collegiate debaters and coaches.
                </p>
                <p className="text-lg mb-6">
                  The program combines classroom instruction with hands-on practice, 
                  culminating in a tournament where students can showcase their newly 
                  acquired skills.
                </p>
                <div className="bg-usc-red text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Program Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-usc-yellow mr-2">•</span>
                      Expert instruction from USC debate coaches
                    </li>
                    <li className="flex items-start">
                      <span className="text-usc-yellow mr-2">•</span>
                      Small group workshops and individual coaching
                    </li>
                    <li className="flex items-start">
                      <span className="text-usc-yellow mr-2">•</span>
                      Access to USC's debate resources and facilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-usc-yellow mr-2">•</span>
                      Competitive tournament experience
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
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Summer Program Photos</h3>
                <p className="text-sm text-gray-500">Photos from past summer programs and student activities</p>
              </div>
            </div>
          </section>

          {/* Tournament Section */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Our Tournaments</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">USC High School Invitational</h3>
                <p className="text-gray-600 mb-4">
                  Our annual tournament brings together high school debate teams from 
                  across Southern California for a weekend of competitive policy debate.
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

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Novice Debate Workshop</h3>
                <p className="text-gray-600 mb-4">
                  A one-day workshop designed for students new to debate, featuring 
                  instruction, practice rounds, and mentorship from USC debaters.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Workshop</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Beginner Friendly</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">One Day</span>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[100px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Workshop schedule and registration</p>
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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Summer Program Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Dates:</h4>
                    <p className="text-gray-600">TBD - Two weeks in July/August</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location:</h4>
                    <p className="text-gray-600">USC Campus, Los Angeles, CA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Cost:</h4>
                    <p className="text-gray-600">TBD - Scholarships available</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Eligibility:</h4>
                    <p className="text-gray-600">High school students (grades 9-12)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Registration & Contact</h3>
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
            <h2 className="text-3xl font-caslon mb-4">Start Your Debate Journey</h2>
            <p className="text-xl mb-6">
              Join our high school programs and develop the skills that will serve you 
              throughout your academic and professional career
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