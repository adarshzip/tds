import { Metadata } from "next";
import Link from "next/link";
import { faArrowRight, faGraduationCap, faUsers, faHandshake, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Community Outreach',
  description: 'Learn about USC Trojan Debate Squad\'s efforts to expand access to debate throughout Los Angeles through educational programs and community partnerships.',
}

export default function Outreach() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-usc-red to-red-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-caslon mb-6">Community Outreach</h1>
          <p className="text-xl md:text-2xl font-source_sans max-w-3xl mx-auto">
            Expanding access to debate education throughout Los Angeles and beyond
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 flex text-gray-500 text-sm py-5 gap-1">
        <Link href="/" className="text-usc-red underline hover:text-red-700">Home</Link>
        <FontAwesomeIcon icon={faArrowRight} className="my-auto" />
        <span className="text-gray-700">Outreach</span>
      </div>
      <hr className="max-w-6xl mx-auto" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Mission Statement */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-caslon text-usc-red mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The Trojan Debate Squad is committed to democratizing access to debate education. 
            We believe that the critical thinking, research, and communication skills developed 
            through debate should be available to all students, regardless of their background 
            or circumstances.
          </p>
        </section>

        {/* Programs Grid */}
        <section className="mb-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start place-items-center">
            {/* High School Mentorship */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold text-usc-red mb-4">High School Mentorship</h3>
              <p className="text-gray-700 mb-4">
                We partner with Los Angeles high schools to provide debate coaching, 
                tournament support, and educational resources to students who might 
                not otherwise have access to competitive debate.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Weekly coaching sessions</li>
                <li>• Tournament preparation</li>
                <li>• Equipment and resource sharing</li>
                <li>• College application guidance</li>
              </ul>
            </div>

            {/* Partnership Programs */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-usc-red mb-4">
                <FontAwesomeIcon icon={faHandshake} className="text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold text-usc-red mb-4">Partnership Programs</h3>
              <p className="text-gray-700 mb-4">
                We collaborate with educational institutions, non-profits, and community 
                organizations to expand debate opportunities across Los Angeles.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• School district partnerships</li>
                <li>• Non-profit collaborations</li>
                <li>• University outreach initiatives</li>
                <li>• International exchange programs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-usc-red text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-xl font-semibold mb-2">Partner Schools</div>
              <p className="text-sm opacity-90">High schools across Los Angeles County</p>
            </div>
            <div className="bg-usc-yellow text-black p-8 rounded-lg">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl font-semibold mb-2">Students Served</div>
              <p className="text-sm opacity-90">Annually through our programs</p>
            </div>
            <div className="bg-usc-red text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-xl font-semibold mb-2">Years of Outreach</div>
              <p className="text-sm opacity-90">Serving the Los Angeles community</p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-usc-red mb-4">Maria&apos;s Journey</h3>
              <p className="text-gray-700 mb-4 italic">
                &quot;Through USC&apos;s debate mentorship program, I discovered my passion for 
                public speaking and critical thinking. Now I&apos;m studying political science 
                at UCLA and hope to attend law school.&quot;
              </p>
              <p className="text-sm text-gray-600">- Maria Rodriguez, Former High School Mentee</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-usc-red mb-4">Lincoln High School</h3>
              <p className="text-gray-700 mb-4 italic">
                &quot;USC&apos;s partnership has transformed our debate program. Our students have 
                gained confidence, improved their academic performance, and developed 
                skills that will serve them throughout their lives.&quot;
              </p>
              <p className="text-sm text-gray-600">- Dr. Sarah Johnson, Lincoln High School Principal</p>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section>
          <h2 className="text-4xl font-caslon text-usc-red text-center mb-12">Our Partners</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <h4 className="font-semibold text-usc-red mb-2">Los Angeles Unified School District</h4>
                <p className="text-sm text-gray-600">District-wide debate initiative</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-usc-red mb-2">Urban Debate League</h4>
                <p className="text-sm text-gray-600">National debate organization</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-usc-red mb-2">California High School Speech Association</h4>
                <p className="text-sm text-gray-600">State debate organization</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-usc-red mb-2">USC Annenberg School</h4>
                <p className="text-sm text-gray-600">Academic partnership</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 