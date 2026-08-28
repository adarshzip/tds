import Link from 'next/link';

export default function Banner() {
    return (
        <div className="bg-usc-yellow text-black text-center px-4 py-2 text-sm sm:text-base font-medium relative z-[60]">
            Students must apply via{' '}
            <Link
                href="https://admission.usc.edu/prospective-students/how-to-apply/first-year-students/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:text-usc-red transition-colors focus:outline-none"
            >
                early action or early decision
            </Link>{' '}
            to be considered for merit scholarships.
        </div>
    );
}
