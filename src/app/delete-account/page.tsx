import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account & Data Deletion – CarpMarks',
};

export default function DeleteAccountPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Back to CarpMarks
          </Link>
          <h1 className="text-4xl font-bold mt-4">Account &amp; Data Deletion</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-600 leading-relaxed">
        <div className="bg-[#0A4D68]/10 border-l-4 border-[#0A4D68] p-5 rounded-lg mb-8">
          <p className="font-medium text-gray-900">
            You can delete your CarpMarks account and all associated data at any time.
          </p>
        </div>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-8 mb-4">Delete Account in the App</h2>
        <p className="mb-6">
          You can delete your CarpMarks account directly in the app by following these steps:
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <div className="space-y-4">
            {[
              { step: 1, text: 'Open the CarpMarks app' },
              { step: 2, text: <span>Go to <strong className="text-gray-900">Profile</strong></span> },
              { step: 3, text: <span>Tap <strong className="text-gray-900">Delete Account</strong></span> },
              { step: 4, text: 'Confirm the deletion' },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-center gap-4">
                <span className="bg-[#0A4D68] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step}
                </span>
                <span className="text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-8 mb-4">Cannot Access the App?</h2>
        <p className="mb-4">If you cannot access the app, please email us at:</p>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center mb-4">
          <a
            href="mailto:support@carpmarks.com"
            className="text-[#0A4D68] font-bold text-lg hover:underline"
          >
            support@carpmarks.com
          </a>
        </div>
        <p className="mb-8">
          Please include the{' '}
          <strong className="text-gray-900">email address used to register</strong> your CarpMarks
          account. We will process your deletion request within 30 days.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-8 mb-4">What Gets Deleted</h2>
        <p className="mb-4">
          When you delete your account, the following data will be permanently removed:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Your account information (email, display name, profile photo)</li>
          <li>All saved fishing spots and their photos</li>
          <li>All catch records and their photos</li>
          <li>Your app preferences and notification settings</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-8 text-gray-700">
          <strong className="text-gray-900">Warning:</strong> Account deletion is permanent and
          cannot be undone. Please make sure you want to proceed before deleting your account.
        </div>

        <Link href="/" className="text-[#0A4D68] font-semibold hover:underline">
          ← Back to CarpMarks
        </Link>
      </div>
    </div>
  );
}
