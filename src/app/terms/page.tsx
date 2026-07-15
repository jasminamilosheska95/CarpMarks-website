import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service – CarpMarks',
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Back to CarpMarks
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">Terms of Service</h1>
          <p className="text-white/60 text-sm">Last Updated: July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-600 leading-relaxed">
        <div className="bg-[#0A4D68]/10 border-l-4 border-[#0A4D68] p-5 rounded-lg mb-8">
          <p className="font-medium text-gray-900">
            Welcome to CarpMarks. These Terms of Service govern your access to and use of our
            mobile application. Please read them carefully before using our Service.
          </p>
        </div>

        <p className="mb-6">
          <strong className="text-gray-900">
            By downloading, installing, or using CarpMarks, you agree to be bound by these Terms.
          </strong>{' '}
          If you do not agree to these Terms, do not use the Service.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By creating an account or using CarpMarks, you confirm that you:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Are at least <strong className="text-gray-900">13 years of age</strong>
          </li>
          <li>Have the legal capacity to enter into these Terms</li>
          <li>Will comply with all applicable laws and regulations</li>
          <li>Accept our Privacy Policy</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">2. Description of Service</h2>
        <p className="mb-4">
          CarpMarks is a mobile application for fishing enthusiasts that allows you to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Save and manage fishing spot locations on an interactive map</li>
          <li>Log and track your fish catches with details</li>
          <li>View current fishing conditions including weather and moon phase</li>
          <li>Receive push notifications when conditions are favorable</li>
          <li>Attach photos to spots and catches</li>
          <li>Plan fishing sessions with the Session Planner (AI)</li>
          <li>Identify fish species from catch photos with the scanner (AI)</li>
          <li>Share catches with the community and view leaderboards</li>
          <li>View statistics and history of your fishing activities</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">3. User Accounts</h2>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">3.1 Account Registration</h3>
        <p className="mb-6">
          To use CarpMarks, you must create an account with accurate information.{' '}
          <strong className="text-gray-900">
            You are responsible for maintaining the confidentiality of your account credentials.
          </strong>
        </p>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">3.2 Account Security</h3>
        <p className="mb-4">You agree to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Keep your password secure and confidential</li>
          <li>Notify us immediately of any unauthorized access</li>
          <li>Not share your account credentials with others</li>
          <li>Not create multiple accounts for the same person</li>
        </ul>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">3.3 Account Termination</h3>
        <p className="mb-6">
          You may delete your account at any time through the Profile section. We reserve the right
          to suspend or terminate accounts that violate these Terms.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">4. User Content</h2>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">4.1 Your Content</h3>
        <p className="mb-6">
          <strong className="text-gray-900">
            You retain ownership of all content you create
          </strong>{' '}
          within CarpMarks, including fishing spots, catch records, notes, and photos. By using the
          Service, you grant us a limited license to store and display your content solely for
          providing the Service.
        </p>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">4.2 Prohibited Content</h3>
        <p className="mb-4">You may not upload or store any content that:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Is <strong className="text-gray-900">illegal</strong>, including child exploitation
            material (CSAM)
          </li>
          <li>
            Contains{' '}
            <strong className="text-gray-900">
              pornographic, sexually explicit, or obscene material
            </strong>
          </li>
          <li>
            Depicts{' '}
            <strong className="text-gray-900">violence, abuse, or cruelty</strong> towards humans
            or animals
          </li>
          <li>
            Contains{' '}
            <strong className="text-gray-900">
              hateful, discriminatory, harassing, or threatening
            </strong>{' '}
            content
          </li>
          <li>
            <strong className="text-gray-900">
              Infringes the intellectual property rights
            </strong>{' '}
            of others
          </li>
          <li>
            Contains <strong className="text-gray-900">malware, viruses, or malicious code</strong>
          </li>
          <li>
            Is <strong className="text-gray-900">falsified or misrepresented</strong>, including
            photos you did not take yourself, catches logged as your own that are not, or
            AI-generated or edited images presented as real catches
          </li>
          <li>
            Depicts <strong className="text-gray-900">illegal fishing activity</strong>, such as
            poaching, fishing out of season, or fishing on private waters without permission
          </li>
          <li>
            Otherwise{' '}
            <strong className="text-gray-900">violates applicable laws</strong>
          </li>
        </ul>
        <p className="mb-6">
          Content must also comply with our{' '}
          <strong className="text-gray-900">Photo Guidelines (Section 4.5 below)</strong>, which we
          may update from time to time.
        </p>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">4.3 Right to Remove Content</h3>
        <p className="mb-4">
          <strong className="text-gray-900">
            We reserve the right, but have no obligation, to:
          </strong>
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Review, monitor, and moderate any user-submitted content</li>
          <li>
            <strong className="text-gray-900">
              Remove or disable access to any content at our sole discretion, without prior notice
            </strong>
            , that we determine violates these Terms or is otherwise objectionable
          </li>
          <li>
            <strong className="text-gray-900">
              Immediately suspend or permanently terminate accounts
            </strong>{' '}
            that upload prohibited content, without refund
          </li>
          <li>
            <strong className="text-gray-900">
              Report illegal content to law enforcement
            </strong>{' '}
            authorities and cooperate fully with investigations
          </li>
          <li>
            Preserve and disclose content if required by law or in good faith belief that such
            action is necessary
          </li>
        </ul>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">4.4 Content Concerns</h3>
        <p className="mb-6">
          If you have concerns about content or misuse of the Service, please contact us at{' '}
          <strong className="text-gray-900">support@carpmarks.com</strong>.
        </p>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">4.5 Photo Guidelines</h3>
        <p className="mb-4">
          These guidelines help us promote responsible fish handling and maintain a positive
          experience for everyone in the CarpMarks community. Photos you upload should:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Show the fish{' '}
            <strong className="text-gray-900">
              held safely in a horizontal position over a mat, or resting safely on a mat
            </strong>
          </li>
          <li>
            <strong className="text-gray-900">
              Not include blood, injuries, or other graphic content
            </strong>
          </li>
          <li>
            Clearly show the <strong className="text-gray-900">entire fish</strong>
          </li>
        </ul>
        <p className="mb-6">
          Photos that do not meet these guidelines may be removed under Section 4.3.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">5. Acceptable Use</h2>
        <p className="mb-4">When using CarpMarks, you agree to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Use the Service only for its intended purpose</li>
          <li>Comply with all applicable local, national, and international laws</li>
          <li>Respect the rights and privacy of others</li>
          <li>Not attempt unauthorized access to our systems or other users&apos; accounts</li>
          <li>Not reverse engineer, decompile, or disassemble the application</li>
          <li>Not use automated bots, scrapers, or crawlers to access the Service</li>
          <li>Not interfere with or disrupt the Service or its servers</li>
          <li>Not use the Service to collect personal data of other users</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          6. Location Data and Safety
        </h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-4">
          <p className="font-bold text-red-700 mb-2">Important Safety Notice</p>
          <p className="text-gray-600 text-sm">
            You are solely responsible for your safety when traveling to fishing locations. Always
            verify local regulations and obtain required permits.
          </p>
        </div>
        <p className="mb-4">You acknowledge that:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Fishing spot coordinates and map data are for personal reference only and{' '}
            <strong className="text-gray-900">
              not a substitute for proper navigation
            </strong>
          </li>
          <li>
            <strong className="text-gray-900">
              You must verify local fishing regulations
            </strong>
          </li>
          <li>
            <strong className="text-gray-900">You must respect private property</strong>
          </li>
          <li>You assume all risks associated with fishing activities</li>
          <li>We are not responsible for location safety or legality</li>
          <li>
            Any injury, loss, or damage arising from visiting locations saved in the app is your
            sole responsibility
          </li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          7. Fishing Conditions Data
        </h2>
        <p className="mb-4">
          CarpMarks provides fishing condition information for{' '}
          <strong className="text-gray-900">informational purposes only</strong>. You acknowledge
          that:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Data is obtained from third-party sources</li>
          <li>We do not guarantee accuracy or reliability</li>
          <li>Fishing success depends on many factors</li>
          <li>Check official forecasts for safety decisions</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">8. Intellectual Property</h2>
        <p className="mb-4">
          The CarpMarks application, including its design, code, graphics, and trademarks, is our
          exclusive property. You may not:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Copy, modify, or distribute the application</li>
          <li>Use our trademarks without permission</li>
          <li>Create derivative works</li>
          <li>Use the Service for unauthorized commercial purposes</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          9. Premium Subscriptions and Payments
        </h2>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">9.1 Subscription Plans</h3>
        <p className="mb-6">
          CarpMarks offers optional premium subscription plans (monthly and yearly) that unlock
          additional features. Subscription details and pricing are displayed within the app before
          purchase.
        </p>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">9.2 Billing and Auto-Renewal</h3>
        <p className="mb-4">
          All payments are processed through the{' '}
          <strong className="text-gray-900">Apple App Store or Google Play Store</strong>. By
          subscribing, you agree that:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong className="text-gray-900">Subscriptions automatically renew</strong> at the end
            of each billing period unless cancelled at least 24 hours before the renewal date
          </li>
          <li>
            Your payment method will be charged through your App Store or Google Play account
          </li>
          <li>We do not have access to your payment card or banking details</li>
          <li>
            Prices are displayed in your local currency and may include applicable taxes
          </li>
        </ul>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">9.3 Cancellation</h3>
        <p className="mb-4">You may cancel your subscription at any time through:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong className="text-gray-900">Google Play Store:</strong> Settings &gt;
            Subscriptions &gt; CarpMarks &gt; Cancel
          </li>
          <li>
            <strong className="text-gray-900">Apple App Store:</strong> Settings &gt; Apple ID
            &gt; Subscriptions &gt; CarpMarks &gt; Cancel
          </li>
        </ul>
        <p className="mb-6">
          Cancellation takes effect at the end of the current billing period. You will retain access
          to premium features until the end of your paid period.{' '}
          <strong className="text-gray-900">
            Deleting the app does not cancel your subscription.
          </strong>
        </p>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">9.4 Refund Policy</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm font-medium text-gray-700">
          ALL PURCHASES ARE PROCESSED BY THE APPLE APP STORE OR GOOGLE PLAY STORE. REFUNDS ARE
          SUBJECT TO THE RESPECTIVE STORE&apos;S REFUND POLICIES. CARPMARKS DOES NOT PROCESS REFUNDS
          DIRECTLY.
        </div>
        <p className="mb-4">To request a refund:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong className="text-gray-900">Google Play:</strong> Visit Google Play Help Center
            or request through Google Play Store within the applicable refund window
          </li>
          <li>
            <strong className="text-gray-900">Apple:</strong> Visit reportaproblem.apple.com or
            contact Apple Support
          </li>
        </ul>
        <p className="mb-6">
          We are not responsible for any charges resulting from your failure to cancel a
          subscription before a renewal date. No partial refunds will be provided for unused
          portions of a subscription period.
        </p>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">9.5 Price Changes</h3>
        <p className="mb-6">
          We reserve the right to change subscription prices. You will be notified of price changes
          in advance through the App Store or Google Play Store. Continued subscription after a
          price change constitutes acceptance of the new price.
        </p>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">9.6 Free Trial</h3>
        <p className="mb-6">
          If we offer a free trial, it will automatically convert to a paid subscription at the end
          of the trial period unless cancelled. You may cancel during the trial period at no charge.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          10. Disclaimer of Warranties
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm font-medium text-gray-700">
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. WE DO NOT WARRANT
          THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER
          HARMFUL COMPONENTS.
        </div>
        <p className="mb-6">
          We do not warrant that the Service will meet your requirements, that results obtained will
          be accurate or reliable, or that errors will be corrected.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          11. Limitation of Liability
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm font-medium text-gray-700">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CARPMARKS, ITS
          OWNERS, OPERATORS, DEVELOPERS, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT
          LIMITED TO DAMAGES FOR LOSS OF PROFITS, DATA, GOODWILL, USE, OR OTHER INTANGIBLE LOSSES,
          REGARDLESS OF WHETHER WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </div>
        <p className="mb-4">
          <strong className="text-gray-900">
            Our total aggregate liability shall not exceed the amount you paid us in the twelve (12)
            months preceding the claim, or $50 USD, whichever is greater.
          </strong>
        </p>
        <p className="mb-4">This limitation applies to damages from:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Your use or inability to use the Service</li>
          <li>Unauthorized access to or alteration of your data</li>
          <li>Statements or conduct of any third party on the Service</li>
          <li>Fishing activities or visits to saved locations</li>
          <li>Reliance on weather, condition, or any other data provided</li>
          <li>Content posted by other users</li>
          <li>Any other matter relating to the Service</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">12. Indemnification</h2>
        <p className="mb-4">
          <strong className="text-gray-900">
            You agree to defend, indemnify, and hold harmless CarpMarks
          </strong>
          , its owners, operators, developers, affiliates, licensors, and their respective officers,
          directors, employees, and agents from and against any and all claims, damages,
          obligations, losses, liabilities, costs, and expenses (including attorney&apos;s fees)
          arising from:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Your use of the Service</li>
          <li>Your violation of these Terms</li>
          <li>
            Your violation of any third-party rights, including intellectual property rights
          </li>
          <li>Any content you submit, post, or transmit through the Service</li>
          <li>Your violation of any applicable laws or regulations</li>
          <li>Any claims made by third parties related to your use of the Service</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">13. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access immediately,{' '}
          <strong className="text-gray-900">
            without prior notice or liability and without refund
          </strong>
          , for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Violation of these Terms, including uploading prohibited content</li>
          <li>Fraudulent, abusive, or illegal activity</li>
          <li>Request by law enforcement or government agencies</li>
          <li>Discontinuation or material modification of the Service</li>
          <li>Unexpected technical or security issues</li>
          <li>Extended periods of inactivity</li>
        </ul>
        <p className="mb-6">
          Upon termination, your right to use the Service ceases immediately. Provisions that by
          their nature should survive termination shall survive, including ownership, warranty
          disclaimers, indemnity, and limitations of liability.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">14. Force Majeure</h2>
        <p className="mb-6">
          CarpMarks shall not be liable for any failure or delay in performance resulting from
          causes beyond our reasonable control, including but not limited to: acts of God, natural
          disasters, pandemic, war, terrorism, riots, government actions, power failures, internet
          or telecommunications failures, cyber attacks, or any other event beyond our reasonable
          control.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          15. Governing Law and Dispute Resolution
        </h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of the
          jurisdiction in which the Service operator is established, without regard to conflict of
          law provisions.
        </p>
        <p className="mb-4">
          <strong className="text-gray-900">
            Any dispute arising from these Terms shall be resolved as follows:
          </strong>
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong className="text-gray-900">Informal resolution:</strong> You agree to first
            attempt to resolve any dispute by contacting us at support@carpmarks.com. We will
            attempt to resolve the dispute within 30 days.
          </li>
          <li>
            <strong className="text-gray-900">Binding arbitration:</strong> If informal resolution
            fails, disputes shall be resolved through binding arbitration conducted in the
            jurisdiction of the Service operator.
          </li>
          <li>
            <strong className="text-gray-900">Small claims exception:</strong> Either party may
            bring qualifying claims in small claims court.
          </li>
          <li>
            <strong className="text-gray-900">Opt-out:</strong> You may opt out of the arbitration
            agreement by sending written notice to support@carpmarks.com within 30 days of first
            using the Service.
          </li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">16. Class Action Waiver</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm font-medium text-gray-700">
          YOU AND CARPMARKS AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS
          INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS,
          CONSOLIDATED, OR REPRESENTATIVE ACTION. UNLESS BOTH YOU AND CARPMARKS AGREE OTHERWISE,
          THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE PERSON&apos;S OR PARTY&apos;S CLAIMS.
        </div>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">17. Severability</h2>
        <p className="mb-6">
          If any provision of these Terms is found to be{' '}
          <strong className="text-gray-900">
            unenforceable or invalid by a court of competent jurisdiction, that provision shall be
            limited or eliminated to the minimum extent necessary
          </strong>
          , and the remaining provisions shall continue in full force and effect.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">18. Entire Agreement</h2>
        <p className="mb-6">
          These Terms of Service, together with our Privacy Policy, constitute the{' '}
          <strong className="text-gray-900">
            entire agreement between you and CarpMarks
          </strong>{' '}
          regarding the use of the Service. These Terms supersede any prior agreements,
          communications, or understandings, whether oral or written, between you and CarpMarks.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">19. Waiver</h2>
        <p className="mb-6">
          The failure of CarpMarks to enforce any right or provision of these Terms shall not
          constitute a waiver of such right or provision. Any waiver of any provision of these Terms
          will be effective only if in writing and signed by CarpMarks.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">20. Changes to Terms</h2>
        <p className="mb-6">
          We may modify these Terms at any time. We will notify you of material changes by updating
          the "Last Updated" date and, where appropriate, providing notice through the app.{' '}
          <strong className="text-gray-900">
            Continued use after changes constitutes acceptance.
          </strong>
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">21. Contact Information</h2>
        <p className="mb-4">If you have questions about these Terms, please contact us:</p>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center mb-8">
          <a
            href="mailto:support@carpmarks.com"
            className="text-[#0A4D68] font-bold text-lg hover:underline"
          >
            support@carpmarks.com
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center italic text-gray-400 text-sm mb-8">
          By using CarpMarks, you acknowledge that you have read, understood, and agree to be bound
          by these Terms of Service.
        </div>

        <Link href="/" className="text-[#0A4D68] font-semibold hover:underline">
          ← Back to CarpMarks
        </Link>
      </div>
    </div>
  );
}
