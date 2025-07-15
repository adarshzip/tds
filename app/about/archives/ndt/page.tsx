import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'USC at the National Debate Tournament',
  description: 'A historical list of all USC debaters who have qualified for the NDT.'
}

export default function NDT() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex text-gray-500 text-sm gap-1 mb-4">
          <Link href="/" className="text-usc-red underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/about" className="text-usc-red underline">About</Link>
          <span className="mx-1">/</span>
          <Link href="/about/archives" className="text-usc-red underline">Archives</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">NDT</span>
        </div>
        <h1 className="text-usc-red text-center text-4xl font-caslon mb-8">USC at the National Debate Tournament</h1>
        <div className="text-lg text-gray-700 leading-relaxed mb-8">
          <p className="mb-4">The National Debate Tournament was founded in 1947 as the qualification only tournament that would determine the national debate champion. The tournament was hosted by the West Point Military Academy for the first 20 years of its existence and now rotates among hosts across the country.</p>
          <p className="mb-4">The Trojans have been a fixture at the NDT since its inception, when the Trojans reached the final round the first national championship. Since that team, USC has qualified in more seasons than any other university. USC also has the longest consecutive streak of qualification in the history of the tournament. Trojans have qualified in every season since 1964. The two teams who qualified in 2016 extend the streak to 53 consecutive seasons.</p>
          <p className="mb-4">This is the full list of all of 117 Trojans who have qualified for the NDT.</p>
        </div>
        <h2 className="text-usc-red text-2xl font-caslon mb-4 text-center">NDT Qualifiers (years qualified)</h2>
        <ul className="text-lg text-gray-800 leading-relaxed list-disc list-inside max-w-xl mx-auto mb-8" style={{columnCount: 2, columnGap: '2rem'}}>
          <li>Actis, Chet (68)</li>
          <li>Allswang, Dave (60)</li>
          <li>Anderson, Bill (68, 69)</li>
          <li>Aquino, Marc (96)</li>
          <li>Becker, Evelyn (89, 90)</li>
          <li>Berger, Aron (15, 16)</li>
          <li>Berggren, Brian (06)</li>
          <li>Bevan, Greg (96, 97, 98)</li>
          <li>Bollar, Robert (81, 82, 83)</li>
          <li>Cassanelli, Jon (77, 78)</li>
          <li>Clinco, Peter (73)</li>
          <li>Clough, Larry (75)</li>
          <li>Clubb, Shelley (84, 85)</li>
          <li>Combs, Steve (76, 77, 78)</li>
          <li>Cooney, David (51)</li>
          <li>Cousans, Pat (79)</li>
          <li>Croutch, Robert (57)</li>
          <li>Damus, David (84, 85, 86, 87)</li>
          <li>Day, John (91, 92, 93, 95)</li>
          <li>Deacon, John (63, 64)</li>
          <li>Devlin, Mike (76)</li>
          <li>Do, Monica (09, 10, 11)</li>
          <li>Dobkin, Milton (48)</li>
          <li>Drum, Dale (50)</li>
          <li>Faith, Ross (03)</li>
          <li>Faulkner, David (75)</li>
          <li>Fiori, Nick (05)</li>
          <li>Flam, Rick (66, 67)</li>
          <li>Flynn, Brian (91, 92 , 95)</li>
          <li>Foran, Tom (91)</li>
          <li>Fox, Alan (60, 61)</li>
          <li>Fraser, John (59)</li>
          <li>Garrett, Aaron (01)</li>
          <li>Gaynor, James (88, 89, 90)</li>
          <li>Goodman, Geoff (70, 71, 72)</li>
          <li>Grover, George  (47)</li>
          <li>Haas, Nathaniel (14)</li>
          <li>Hahn, Melissa (99)</li>
          <li>Harold, Paul (09)</li>
          <li>Harrison, Lindsay (98, 99)</li>
          <li>Henderson, William (52)</li>
          <li>Hernandez, Sean (10)</li>
          <li>Higelin, Michael (73, 74)</li>
          <li>Holland, Erik (02)</li>
          <li>Hozduk, Tom (73, 74)</li>
          <li>Hunter, David (51)</li>
          <li>Hurder, Adam (97, 98, 99, 00)</li>
          <li>Hurder, Jordan (00)</li>
          <li>Iftimie, Alex (04, 05, 06, 07)</li>
          <li>Jansen, Bo (54)</li>
          <li>Johnson, Glenn (74, 75)</li>
          <li>Jones, Chris (05, 06, 07, 08)</li>
          <li>Jones, Michael (07, 08, 09)</li>
          <li>Kenner, David (65, 66)</li>
          <li>Kerfoot, Potter (47, 48)</li>
          <li>Khoe, Willem (94)</li>
          <li>LaPaglia, Jennifer (93)</li>
          <li>Larsen, Hex (15, 16)</li>
          <li>Lawhead, Alan (86, 87)</li>
          <li>Lazarevic, Mima (08, 09, 10)</li>
          <li>Lorenzen, Jeff (77)</li>
          <li>Lucaric, Rene (90, 91, 92)</li>
          <li>MacFarlane, Chris (00, 01, 02)</li>
          <li>Maerowitz, Kim (78, 79)</li>
          <li>Markowski, John (97, 98, 99)</li>
          <li>Marson, Charles (63, 64)</li>
          <li>Martin, Jack (75)</li>
          <li>McDade, Robert (88, 89, 90)</li>
          <li>McQueen, Jim (75)</li>
          <li>McVay, Melinda (04)</li>
          <li>Miller, Mike (57, 58)</li>
          <li>Mohr, Leo (79)</li>
          <li>Munoz, Avi (12)</li>
          <li>Nhan, Brandon (15)</li>
          <li>Overing, Bob (15)</li>
          <li>Padrta, Garry (10, 11)</li>
          <li>Palmieri, Ron (71, 72)</li>
          <li>Peckosh, Seth (94, 95)</li>
          <li>Peragine, Alex (81)</li>
          <li>Purk, Clara (13, 14)</li>
          <li>Revelins, Armands (96, 97, 98, 99)</li>
          <li>Richardson, Dale (82, 83)</li>
          <li>Richardson, Eric (85, 86, 87)</li>
          <li>Rodgers, G. (52)</li>
          <li>Rollino, Rick (79, 80)</li>
          <li>Rush, Bert (67)</li>
          <li>Sager, Kelli (80)</li>
          <li>Saiedian, Ideen (13, 14, 16)</li>
          <li>Scalice, Roger (71)</li>
          <li>Schofield, King (70, 72)</li>
          <li>Sharma, Anav (16)</li>
          <li>Sherman, Les (76, 77)</li>
          <li>Shortnacy, Michael (94, 95)</li>
          <li>Silber, Marissa (03, 04)</li>
          <li>Silverman, Andrew (00, 01, 02)</li>
          <li>Singal, Sangeeta (92)</li>
          <li>Smith, James (54)</li>
          <li>Smith, Michael (05, 06, 07, 08)</li>
          <li>Solum, Larry (74, 75, 76)</li>
          <li>Sonnenberg, Paul (58, 59)</li>
          <li>Stamp, Cary (87)</li>
          <li>Stegman, Edwin (50)</li>
          <li>Stein, J.R. (69)</li>
          <li>Stein, Larry (65)</li>
          <li>Stetson, Roger (97, 98, 99)</li>
          <li>Swander, Steve (73)</li>
          <li>Tanimura, Kirby (85)</li>
          <li>Thorpe, Mike (61)</li>
          <li>Turoff, Corey (02, 03)</li>
          <li>Twigg, Reggie (86)</li>
          <li>Vail, Kelli (01)</li>
          <li>Viitzileos, John (14)</li>
          <li>Walther, Andrew (94)</li>
          <li>Weitz, Andrew (96, 97)</li>
          <li>Winston, Dennis (71, 72)</li>
          <li>Wolnerman, Daniel (03, 04)</li>
          <li>Wong, Nate (12)</li>
        </ul>

        {/* Speaker Awards Section */}
        <h2 className="text-usc-red text-2xl font-caslon mb-4 text-center">Trojan Speaker Awards at the NDT</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 text-lg text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Place</th>
                <th className="py-2 px-4 border-b">Debater</th>
                <th className="py-2 px-4 border-b">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b">1st Speaker</td><td className="py-2 px-4 border-b">Potter Kerfoot</td><td className="py-2 px-4 border-b">1948</td></tr>
              <tr><td className="py-2 px-4 border-b">1st Speaker</td><td className="py-2 px-4 border-b">Rick Flam</td><td className="py-2 px-4 border-b">1967</td></tr>
              <tr><td className="py-2 px-4 border-b">1st Speaker</td><td className="py-2 px-4 border-b">Mike Higelin</td><td className="py-2 px-4 border-b">1974</td></tr>
              <tr><td className="py-2 px-4 border-b">1st Speaker</td><td className="py-2 px-4 border-b">Mike Miller</td><td className="py-2 px-4 border-b">1958</td></tr>
              <tr><td className="py-2 px-4 border-b">2nd Speaker</td><td className="py-2 px-4 border-b">Ron Palmieri</td><td className="py-2 px-4 border-b">1972</td></tr>
              <tr><td className="py-2 px-4 border-b">3rd Speaker</td><td className="py-2 px-4 border-b">Ron Palmieri</td><td className="py-2 px-4 border-b">1971</td></tr>
              <tr><td className="py-2 px-4 border-b">3rd Speaker</td><td className="py-2 px-4 border-b">David Kenner</td><td className="py-2 px-4 border-b">1966</td></tr>
              <tr><td className="py-2 px-4 border-b">5th Speaker</td><td className="py-2 px-4 border-b">Steve Combs</td><td className="py-2 px-4 border-b">1977</td></tr>
              <tr><td className="py-2 px-4 border-b">6th Speaker</td><td className="py-2 px-4 border-b">Charles Marson</td><td className="py-2 px-4 border-b">1964</td></tr>
              <tr><td className="py-2 px-4 border-b">6th Speaker</td><td className="py-2 px-4 border-b">Geoff Goodman</td><td className="py-2 px-4 border-b">1971</td></tr>
              <tr><td className="py-2 px-4 border-b">6th Speaker</td><td className="py-2 px-4 border-b">Larry Solum</td><td className="py-2 px-4 border-b">1976</td></tr>
              <tr><td className="py-2 px-4 border-b">6th Speaker</td><td className="py-2 px-4 border-b">Steve Combs</td><td className="py-2 px-4 border-b">1978</td></tr>
              <tr><td className="py-2 px-4 border-b">7th Speaker</td><td className="py-2 px-4 border-b">Larry Solum</td><td className="py-2 px-4 border-b">1975</td></tr>
              <tr><td className="py-2 px-4 border-b">8th Speaker</td><td className="py-2 px-4 border-b">Lindsay Harrison</td><td className="py-2 px-4 border-b">1999</td></tr>
              <tr><td className="py-2 px-4 border-b">9th Speaker</td><td className="py-2 px-4 border-b">Dale Drum</td><td className="py-2 px-4 border-b">1950</td></tr>
              <tr><td className="py-2 px-4 border-b">9th Speaker</td><td className="py-2 px-4 border-b">Geoff Goodman</td><td className="py-2 px-4 border-b">1972</td></tr>
              <tr><td className="py-2 px-4 border-b">10th Speaker</td><td className="py-2 px-4 border-b">King Schofield</td><td className="py-2 px-4 border-b">1972</td></tr>
              <tr><td className="py-2 px-4 border-b">11th Speaker</td><td className="py-2 px-4 border-b">Alan Fox</td><td className="py-2 px-4 border-b">1960</td></tr>
              <tr><td className="py-2 px-4 border-b">15th Speaker</td><td className="py-2 px-4 border-b">Alex Iftimie</td><td className="py-2 px-4 border-b">2007</td></tr>
              <tr><td className="py-2 px-4 border-b">17th Speaker</td><td className="py-2 px-4 border-b">John Deacon</td><td className="py-2 px-4 border-b">1964</td></tr>
              <tr><td className="py-2 px-4 border-b">17th Speaker</td><td className="py-2 px-4 border-b">David Kenner</td><td className="py-2 px-4 border-b">1965</td></tr>
              <tr><td className="py-2 px-4 border-b">18th Speaker</td><td className="py-2 px-4 border-b">Michael Jones</td><td className="py-2 px-4 border-b">2009</td></tr>
              <tr><td className="py-2 px-4 border-b">20th Speaker</td><td className="py-2 px-4 border-b">Bo Jansen</td><td className="py-2 px-4 border-b">1954</td></tr>
              <tr><td className="py-2 px-4 border-b">20th Speaker</td><td className="py-2 px-4 border-b">Roger Stetson</td><td className="py-2 px-4 border-b">1999</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
} 