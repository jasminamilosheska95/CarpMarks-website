import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Verified – CarpMarks',
};

export default function VerifiedPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome!</h1>
        <p className="text-gray-500 text-lg mb-2">Your email has been verified.</p>
        <p className="text-gray-500 mb-10">
          Your account is now fully activated. You&apos;re all set to start tracking your fishing spots
          and catches with CarpMarks.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#0A4D68] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#05293D] transition-colors shadow-lg"
        >
          Open the App
        </Link>

        <p className="mt-8 text-sm text-gray-400">
          Need help?{' '}
          <a href="mailto:support@carpmarks.com" className="text-[#0A4D68] hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}
