'use client';

import { useEffect, useState } from 'react';

export default function ResetPasswordPage() {
  const [status, setStatus] = useState<'redirecting' | 'no-token' | 'no-app'>('redirecting');

  useEffect(() => {
    const hash = window.location.hash.slice(1); // remove leading #
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
    const type = params.get('type');

    if (!accessToken || type !== 'recovery') {
      setStatus('no-token');
      return;
    }

    // Build the deep link with the same token params the app expects
    const deepLink = `carpmarks://reset-password#access_token=${accessToken}&refresh_token=${refreshToken || ''}&type=recovery`;
    window.location.href = deepLink;

    // If app didn't open after 2.5s, show fallback message
    const timer = setTimeout(() => setStatus('no-app'), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">

        {status === 'redirecting' && (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#14B8A6]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#14B8A6] animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Opening CarpMarks…</h1>
            <p className="text-gray-500">You should be redirected to the app automatically.</p>
          </>
        )}

        {status === 'no-app' && (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">App Not Found</h1>
            <p className="text-gray-500 mb-8">
              Make sure CarpMarks is installed on your device, then tap the button below.
            </p>
            <a
              href={typeof window !== 'undefined' ? `carpmarks://reset-password${window.location.hash}` : '#'}
              className="inline-block bg-[#14B8A6] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0D9488] transition-colors"
            >
              Open CarpMarks
            </a>
            <p className="mt-8 text-sm text-gray-400">
              Need help?{' '}
              <a href="mailto:support@carpmarks.com" className="text-[#0B2434] hover:underline">
                Contact support
              </a>
            </p>
          </>
        )}

        {status === 'no-token' && (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Link Expired</h1>
            <p className="text-gray-500 mb-8">
              This password reset link is invalid or has expired. Please request a new one from the app.
            </p>
            <p className="text-sm text-gray-400">
              Need help?{' '}
              <a href="mailto:support@carpmarks.com" className="text-[#0B2434] hover:underline">
                Contact support
              </a>
            </p>
          </>
        )}

      </div>
    </div>
  );
}
