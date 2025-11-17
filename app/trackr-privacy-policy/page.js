export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-20 pb-4">
      <div className="max-w-none">
        <h1 className="text-lg font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-4">Privacy Policy</h1>

        <p className="text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 mb-6">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">1. Introduction</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              At Trackr (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we
              handle information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">2. Information We Do NOT Collect</h2>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
              <h3 className="text-base font-[450] tracking-[-0.1px] text-green-800 dark:text-green-200 mb-1">No Data Collection</h3>
              <p className="text-sm tracking-[-0.1px] text-green-700 dark:text-green-300">
                <strong>Trackr does not collect, store, or transmit any personal data or user information.</strong>
              </p>
            </div>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">We do not collect:</p>
            <ul className="list-disc list-inside mt-2 text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 space-y-1">
              <li>Personal identification information (names, email addresses, phone numbers)</li>
              <li>Device information or identifiers</li>
              <li>Usage data or analytics</li>
              <li>Location data</li>
              <li>Contact lists or other device content</li>
              <li>Any other personal or sensitive information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">3. How the App Works</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              Trackr operates entirely offline on your device. All app functionality, including playing white noise sounds and managing premium features,
              happens locally without any data transmission to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">4. Premium Features</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              If you choose to upgrade to premium features, any payment processing is handled entirely by your device&apos;s app store (Apple App Store or
              Google Play Store) according to their respective privacy policies. We do not receive or store any payment information.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">5. Third-Party Services</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              The App does not integrate with any third-party analytics, advertising, or data collection services. No data is shared with third parties because
              no data is collected.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">6. Children&apos;s Privacy</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              Since we do not collect any data, the App is safe for users of all ages, including children under 13. No personal information is requested or
              collected from anyone, regardless of age.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">7. Data Security</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              Since no data is collected, stored, or transmitted, there are no data security concerns related to personal information. All app data remains on
              your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibent text-neutral-900 dark:text-neutral-100 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              We may update this Privacy Policy from time to time. Any changes will be posted here with an updated effective date. Since we don&apos;t collect
              contact information, we cannot notify you directly of changes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">9. Contact Us</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              If you have any questions about this Privacy Policy, please contact us through the App&apos;s support channels.
            </p>
          </section>
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="text-base font-[450] tracking-[-0.1px] text-blue-800 dark:text-blue-200 mb-1">Summary</h3>
          <p className="text-sm tracking-[-0.1px] text-blue-700 dark:text-blue-300">
            <strong>Your privacy is fully protected.</strong> Trackr - White Noises does not collect, store, or share any of your personal data. The app works
            entirely on your device, ensuring complete privacy.
          </p>
        </div>
      </div>
    </main>
  );
}
