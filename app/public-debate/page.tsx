import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Public Debate',
  description: 'Explore USC Trojan Debate Squad\'s public debate initiatives, community engagement programs, and public speaking events.',
}

export default function PublicDebate() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-caslon mb-6">Public Debate</h1>
          <p className="text-xl mb-8">
            Bringing the power of reasoned argument to the public sphere
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mission Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-usc-red text-3xl font-caslon mb-6">Public Debate Mission</h2>
                <p className="text-lg mb-4">
                  The Trojan Debate Squad believes that the skills of reasoned argument 
                  and critical thinking should be accessible to everyone. Our public 
                  debate initiatives bring the rigor and excitement of competitive 
                  debate to broader audiences.
                </p>
                <p className="text-lg mb-6">
                  Through public debates, community forums, and educational events, 
                  we demonstrate how civil discourse can address complex issues and 
                  foster understanding across different perspectives.
                </p>
                <div className="bg-usc-red text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-usc-yellow mr-2">•</span>
                      Civil discourse on controversial topics
                    </li>
                    <li className="flex items-start">
                      <span className="text-usc-yellow mr-2">•</span>
                      Evidence-based argumentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-usc-yellow mr-2">•</span>
                      Community engagement and education
                    </li>
                    <li className="flex items-start">
                      <span className="text-usc-yellow mr-2">•</span>
                      Bridging divides through dialogue
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
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Public Debate Events</h3>
                <p className="text-sm text-gray-500">Photos and videos from past public debate events</p>
              </div>
            </div>
          </section>

          {/* Event Types Section */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Types of Public Debates</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Parliamentary Debates</h3>
                <p className="text-gray-600 mb-4">
                  Our signature public debate format, featuring impromptu topics and 
                  engaging audience participation. These debates showcase the skills 
                  of our debaters while making complex issues accessible to the public.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Impromptu</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Audience Engagement</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Public Format</span>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[100px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Upcoming parliamentary debate schedule</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Community Forums</h3>
                <p className="text-gray-600 mb-4">
                  Interactive discussions on local and national issues, featuring 
                  expert panelists, community leaders, and audience Q&amp;A sessions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Panel Discussion</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Expert Speakers</span>
                                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Q&amp;A Format</span>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[100px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Community forum topics and speakers</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Educational Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Hands-on workshops teaching debate skills to community members, 
                  students, and organizations interested in improving their 
                  argumentation abilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Skills Training</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Interactive</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">All Ages</span>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[100px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Workshop registration and schedule</p>
                </div>
              </div>
            </div>
          </section>

          {/* Past Events Section */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Recent Public Debate Events</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-2">USC vs UCLA Public Debate</h3>
                <p className="text-gray-600 mb-4">
                  Annual rivalry debate featuring teams from USC and UCLA debating 
                  current policy issues in front of a public audience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Annual Event</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Rivalry Debate</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Public Audience</span>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[80px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Event photos and video highlights</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-2">Sheindlin Forum Debate</h3>
                <p className="text-gray-600 mb-4">
                  Special public debate event focusing on criminal justice reform 
                  and legal system improvements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Special Event</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Criminal Justice</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Policy Focus</span>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[80px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Forum details and participant information</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-2">Community Debate Series</h3>
                <p className="text-gray-600 mb-4">
                  Monthly public debates on topics ranging from local politics to 
                  national issues, open to all community members.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-usc-red text-white px-3 py-1 rounded-full text-sm">Monthly Series</span>
                  <span className="bg-usc-yellow text-black px-3 py-1 rounded-full text-sm">Community Focus</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Open to Public</span>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center min-h-[80px] flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Series schedule and upcoming topics</p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Community Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-usc-red text-4xl font-bold mb-2">500+</div>
                <h3 className="text-xl font-semibold mb-2">Community Members Reached</h3>
                <p className="text-gray-600">
                  Through our public debate events and educational programs
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-usc-red text-4xl font-bold mb-2">25+</div>
                <h3 className="text-xl font-semibold mb-2">Public Events Hosted</h3>
                <p className="text-gray-600">
                  Including debates, forums, and educational workshops
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-usc-red text-4xl font-bold mb-2">15+</div>
                <h3 className="text-xl font-semibold mb-2">Partner Organizations</h3>
                <p className="text-gray-600">
                  Community groups and institutions we've collaborated with
                </p>
              </div>
            </div>
          </section>

          {/* Get Involved Section */}
          <section className="mb-16">
            <h2 className="text-usc-red text-3xl font-caslon text-center mb-12">Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Attend Events</h3>
                <p className="text-gray-600 mb-4">
                  Join us for upcoming public debates, community forums, and 
                  educational workshops. All events are free and open to the public.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">Event calendar and registration</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">Email newsletter signup</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-usc-red text-xl font-semibold mb-4">Host an Event</h3>
                <p className="text-gray-600 mb-4">
                  Interested in hosting a public debate or workshop for your 
                  organization or community group? We'd love to collaborate.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">Partnership inquiry form</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">Event planning resources</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-usc-red to-red-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-caslon mb-4">Join the Conversation</h2>
            <p className="text-xl mb-6">
              Experience the power of civil discourse and reasoned argument in our 
              public debate events
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