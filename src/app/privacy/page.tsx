import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – CarpMarks',
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Back to CarpMarks
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last Updated: July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-600 leading-relaxed">
        <div className="bg-[#0A4D68]/10 border-l-4 border-[#0A4D68] p-5 rounded-lg mb-8">
          <p className="font-medium text-gray-900">
            Welcome to CarpMarks. We are committed to protecting your privacy and ensuring the
            security of your personal information.
          </p>
        </div>

        <p className="mb-6">
          By using CarpMarks, you agree to the collection and use of information in accordance with
          this policy.{' '}
          <strong className="text-gray-900">
            If you do not agree with this policy, please do not use our application.
          </strong>
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">1. Information We Collect</h2>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">1.1 Information You Provide</h3>
        <p className="mb-4">
          When you create an account and use CarpMarks, we collect information that you voluntarily
          provide, including:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong className="text-gray-900">Account information:</strong> email address, display
            name, and password
          </li>
          <li>
            <strong className="text-gray-900">Profile information:</strong> profile photo/avatar
          </li>
          <li>
            <strong className="text-gray-900">Fishing spot data:</strong> location coordinates, spot
            names, notes, water depth, and photos
          </li>
          <li>
            <strong className="text-gray-900">Catch records:</strong> fish species, weight, bait and
            rig used, cast distance, date, notes, photos, and weather conditions at the time of the
            catch
          </li>
          <li>
            <strong className="text-gray-900">Preferences:</strong> weight unit preference (lbs/kg),
            notification settings
          </li>
        </ul>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">
          1.2 Information Collected Automatically
        </h3>
        <p className="mb-4">
          When you use our application, we automatically collect certain information:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Device information: device type, model name, operating system</li>
          <li>
            <strong className="text-gray-900">Location data:</strong> GPS coordinates when you use
            map features
          </li>
          <li>Push notification tokens for delivering notifications</li>
          <li>App usage data and analytics (screens viewed, features used)</li>
        </ul>

        <h3 className="text-gray-900 font-bold text-lg mt-6 mb-3">1.3 Payment Information</h3>
        <p className="mb-6">
          If you subscribe to CarpMarks Premium, payment processing is handled entirely by{' '}
          <strong className="text-gray-900">Apple App Store or Google Play Store</strong>. We do not
          collect, store, or have access to your credit card number, bank account details, or other
          financial information. We only receive confirmation of your subscription status.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>To provide and maintain the CarpMarks service</li>
          <li>To save and synchronize your fishing spots and catch records</li>
          <li>To display your current location on the map</li>
          <li>To provide fishing condition information for your saved spots</li>
          <li>To send push notifications about favorable fishing conditions</li>
          <li>To authenticate your identity and secure your account</li>
          <li>To process and manage your premium subscription</li>
          <li>To improve and optimize our application through analytics</li>
          <li>To detect, prevent, and address fraud, abuse, or technical issues</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          3. Data Storage and Security
        </h2>
        <p className="mb-4">
          Your data is stored securely using{' '}
          <strong className="text-gray-900">industry-standard cloud infrastructure</strong> provided
          by Supabase. We implement appropriate security measures including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong className="text-gray-900">Encrypted data transmission</strong> using HTTPS/TLS
            protocols
          </li>
          <li>
            <strong className="text-gray-900">Row-level security (RLS)</strong> ensuring you can
            only access your own data
          </li>
          <li>Secure password hashing and authentication protocols</li>
          <li>Ongoing security monitoring and updates</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg mb-6 italic text-sm">
          While we strive to protect your personal information, no method of transmission over the
          Internet is 100% secure. We cannot guarantee absolute security.
        </div>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">4. Third-Party Services</h2>
        <p className="mb-4">CarpMarks uses the following third-party services:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong className="text-gray-900">Supabase:</strong> Cloud database and user
            authentication
          </li>
          <li>
            <strong className="text-gray-900">Google Maps Platform:</strong> Map display and
            location services
          </li>
          <li>
            <strong className="text-gray-900">Expo:</strong> Push notification delivery and app
            updates
          </li>
          <li>
            <strong className="text-gray-900">Firebase Cloud Messaging:</strong> Push notification
            infrastructure on Android
          </li>
          <li>
            <strong className="text-gray-900">RevenueCat:</strong> Subscription management and
            payment processing
          </li>
          <li>
            <strong className="text-gray-900">Apple App Store / Google Play Store:</strong> Payment
            processing and app distribution
          </li>
          <li>
            <strong className="text-gray-900">Weather providers:</strong> Fishing condition
            information
          </li>
        </ul>
        <p className="mb-6">
          These services have their own privacy policies and we encourage you to review them. We do
          not control and are not responsible for the privacy practices of these third-party services.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">5. Location Data</h2>
        <p className="mb-4">
          CarpMarks collects and uses location data to provide core functionality:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Displaying your current position on the map</li>
          <li>Saving GPS coordinates for your fishing spots</li>
          <li>Providing location-specific weather data</li>
        </ul>
        <p className="mb-4">
          <strong className="text-gray-900">
            Location data is only accessed when you actively use the application.
          </strong>{' '}
          You can disable location permissions at any time through your device settings.
        </p>
        <p className="mb-6">
          The map feature is provided for{' '}
          <strong className="text-gray-900">personal reference only</strong> and is not intended as
          a navigation tool. Always use proper navigation methods when traveling to fishing
          locations.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          6. Camera and Photo Library
        </h2>
        <p className="mb-4">
          CarpMarks requests access to your camera and photo library for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Adding photos to your fishing spots</li>
          <li>Attaching photos to your catch records</li>
          <li>Setting your profile avatar</li>
        </ul>
        <p className="mb-6">
          <strong className="text-gray-900">
            We do not access your camera or photo library without your explicit action.
          </strong>
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">7. Push Notifications</h2>
        <p className="mb-4">
          With your permission, CarpMarks sends push notifications to alert you when fishing
          conditions are favorable at your saved spots.
        </p>
        <p className="mb-6">
          You can customize notification preferences within the app or disable them entirely through
          your device settings.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          8. Data Sharing and Disclosure
        </h2>
        <p className="mb-4">
          <strong className="text-gray-900">Your data is private by default.</strong> Your fishing
          spots, catch records, and personal information are only visible to you unless you
          explicitly choose to share.{' '}
          <strong className="text-gray-900">
            We do not sell, rent, or trade your personal information to third parties.
          </strong>{' '}
          We may share your information only in the following limited circumstances:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong className="text-gray-900">Service providers:</strong> With third-party services
            listed in Section 4, solely to provide and operate our Service
          </li>
          <li>
            <strong className="text-gray-900">Legal requirements:</strong> When required by law,
            court order, subpoena, or government request
          </li>
          <li>
            <strong className="text-gray-900">Safety and enforcement:</strong> To protect the
            rights, safety, or property of CarpMarks, our users, or the public, including enforcing
            our Terms of Service
          </li>
          <li>
            <strong className="text-gray-900">Business transfers:</strong> In connection with a
            merger, acquisition, or sale of assets, in which case you will be notified of any change
            in ownership or use of your data
          </li>
          <li>
            <strong className="text-gray-900">Nearby catch alerts (opt-in):</strong> If you enable
            the "Nearby Catch Alerts" feature, your catch data (species, general location, and
            time) may be shared anonymously with other users who have fishing spots nearby. This
            feature is off by default and can be disabled at any time in your notification settings
          </li>
          <li>
            <strong className="text-gray-900">Community sharing (opt-in, per catch):</strong> If
            you choose to share a catch with the community, that catch — including its photo,
            species, weight, and catch details — is visible to other users in the community feed.
            Sharing is off by default for each catch, and you can unshare any catch at any time
            from the catch itself or from your profile
          </li>
          <li>
            <strong className="text-gray-900">With your consent:</strong> When you explicitly
            authorize us to share your information
          </li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          9. Analytics and Usage Data
        </h2>
        <p className="mb-4">
          We collect usage data to improve the application, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Screen views and feature usage patterns</li>
          <li>App performance metrics and error reports</li>
          <li>General usage statistics and session information</li>
        </ul>
        <p className="mb-6">
          This data may be associated with your account and is used solely to improve app
          performance and user experience.{' '}
          <strong className="text-gray-900">
            We do not share analytics data with third parties for advertising purposes.
          </strong>
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">10. Data Retention</h2>
        <p className="mb-4">
          We retain your personal data for as long as your account is active.{' '}
          <strong className="text-gray-900">
            If you delete your account, your personal data will be removed from our active systems
            upon confirmation.
          </strong>{' '}
          This includes your profile, fishing spots, catch records, and photos.
        </p>
        <p className="mb-6">
          You may delete your account at any time through the Profile section.{' '}
          <strong className="text-gray-900">Account deletion is irreversible.</strong> Residual
          copies may briefly persist in automated backups maintained by our infrastructure provider
          before being overwritten. Some anonymized or aggregated data may be retained where
          required by law or for legitimate business purposes (e.g., fraud prevention, legal
          compliance, resolving disputes).
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          11. International Data Transfers
        </h2>
        <p className="mb-4">
          Your data may be transferred to and processed in countries other than your country of
          residence. These countries may have different data protection laws. By using CarpMarks,
          you consent to the transfer of your data to these countries.
        </p>
        <p className="mb-6">
          We ensure appropriate safeguards are in place to protect your data in accordance with this
          Privacy Policy, including standard contractual clauses where applicable.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          12. Data Breach Notification
        </h2>
        <p className="mb-4">
          In the event of a data breach that affects your personal information, we will:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Notify affected users within{' '}
            <strong className="text-gray-900">72 hours</strong> of becoming aware of the breach
          </li>
          <li>Describe the nature of the breach and the data affected</li>
          <li>Outline the measures taken to address and mitigate the breach</li>
          <li>Notify relevant supervisory authorities as required by law</li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">13. Your Rights</h2>
        <p className="mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong className="text-gray-900">Access:</strong> Request a copy of your personal data
          </li>
          <li>
            <strong className="text-gray-900">Correction:</strong> Request correction of inaccurate
            data
          </li>
          <li>
            <strong className="text-gray-900">Deletion:</strong> Request deletion of your account
            and data
          </li>
          <li>
            <strong className="text-gray-900">Portability:</strong> Request a copy of your data by
            contacting us via email
          </li>
          <li>
            <strong className="text-gray-900">Restriction:</strong> Request restriction of
            processing in certain circumstances
          </li>
          <li>
            <strong className="text-gray-900">Objection:</strong> Object to processing based on
            legitimate interests
          </li>
          <li>
            <strong className="text-gray-900">Opt-out:</strong> Disable notifications and location
            services at any time
          </li>
          <li>
            <strong className="text-gray-900">Withdraw consent:</strong> Withdraw consent for data
            processing at any time
          </li>
        </ul>
        <p className="mb-6">
          To exercise any of these rights, please contact us at support@carpmarks.com. We will
          respond to your request within 30 days.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          14. GDPR Compliance (European Users)
        </h2>
        <p className="mb-4">
          If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland,
          you have additional rights under the General Data Protection Regulation (GDPR):
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong className="text-gray-900">Legal basis:</strong> We process your data based on
            your consent (account creation), contractual necessity (providing the Service), and
            legitimate interests (improving the Service, preventing fraud)
          </li>
          <li>
            <strong className="text-gray-900">Right to lodge complaint:</strong> You have the right
            to lodge a complaint with your local data protection supervisory authority
          </li>
          <li>
            <strong className="text-gray-900">Data transfers:</strong> Where we transfer data
            outside the EEA, we use appropriate safeguards such as Standard Contractual Clauses
          </li>
          <li>
            <strong className="text-gray-900">Right to be forgotten:</strong> You may request
            complete erasure of your personal data
          </li>
        </ul>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          15. CCPA/CPRA Compliance (California Users)
        </h2>
        <p className="mb-4">
          If you are a California resident, the California Consumer Privacy Act (CCPA) and
          California Privacy Rights Act (CPRA) provide you with additional rights:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong className="text-gray-900">Right to know:</strong> What personal information we
            collect and how it is used
          </li>
          <li>
            <strong className="text-gray-900">Right to delete:</strong> Request deletion of your
            personal information
          </li>
          <li>
            <strong className="text-gray-900">Right to opt-out:</strong> We do not sell your
            personal information
          </li>
          <li>
            <strong className="text-gray-900">Non-discrimination:</strong> We will not discriminate
            against you for exercising your privacy rights
          </li>
        </ul>
        <p className="mb-6">
          <strong className="text-gray-900">
            We do not sell or share your personal information
          </strong>{' '}
          as defined under the CCPA/CPRA.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">16. Children&apos;s Privacy</h2>
        <p className="mb-6">
          <strong className="text-gray-900">
            CarpMarks is not intended for children under 13.
          </strong>{' '}
          We do not knowingly collect personal information from children under 13. If you are a
          parent or guardian and believe your child has provided us with personal information, please
          contact us immediately and we will delete such information promptly.
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">
          17. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of material
          changes by updating the "Last Updated" date and, where appropriate, providing additional
          notice through the app.
        </p>
        <p className="mb-6">
          <strong className="text-gray-900">
            Continued use of CarpMarks after changes indicates acceptance of the updated policy.
          </strong>
        </p>

        <h2 className="text-[#0A4D68] text-xl font-bold mt-10 mb-4">18. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy or wish to exercise any of your rights,
          please contact us:
        </p>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center mb-8">
          <a
            href="mailto:support@carpmarks.com"
            className="text-[#0A4D68] font-bold text-lg hover:underline"
          >
            support@carpmarks.com
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center italic text-gray-400 text-sm mb-8">
          Thank you for trusting CarpMarks with your fishing data.
        </div>

        <Link href="/" className="text-[#0A4D68] font-semibold hover:underline">
          ← Back to CarpMarks
        </Link>
      </div>
    </div>
  );
}
