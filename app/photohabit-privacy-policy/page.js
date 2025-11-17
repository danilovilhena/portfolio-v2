export default function PhotoHabitPrivacyPolicy() {
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
              At PhotoHabit (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, and protect information when you use our mobile application for habit tracking with photo verification.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">2. Information We Collect</h2>
            <p className=" leading-relaxed mb-4">To provide cloud sync and improve your experience, we collect and store the following information:</p>
            <ul className="list-disc list-inside mt-2 text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 space-y-1">
              <li>Habit tracking data (habit names, descriptions, completion status)</li>
              <li>Progress and streak information</li>
              <li>App preferences and settings</li>
              <li>Photo references (file paths/identifiers, not the actual photos)</li>
              <li>Account information if you create an account for cloud sync</li>
              <li>Device identifiers for syncing across your devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">3. What We Do NOT Collect</h2>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
              <h3 className="text-base font-[450] tracking-[-0.1px] text-green-800 dark:text-green-200 mb-1">Your Photos Stay Private</h3>
              <p className="text-sm tracking-[-0.1px] text-green-700 dark:text-green-300">
                <strong>We never collect, store, or access your actual photos. Only local references to your selected photos are stored.</strong>
              </p>
            </div>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">We do not collect:</p>
            <ul className="list-disc list-inside mt-2 text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 space-y-1">
              <li>Your actual photos or any image data</li>
              <li>Personal identification beyond what&apos;s needed for account creation</li>
              <li>Location data</li>
              <li>Contact lists or other device content</li>
              <li>Browsing history or activity outside the app</li>
              <li>Sensitive personal information unrelated to habit tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">4. How We Use Your Information</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 mb-3">We use your information to:</p>
            <ul className="list-disc list-inside mt-2 text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 space-y-1">
              <li>Provide habit tracking and progress monitoring</li>
              <li>Sync your data across multiple devices</li>
              <li>Maintain your habit streaks and statistics</li>
              <li>Improve app functionality and user experience</li>
              <li>Provide customer support when requested</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">5. Data Storage and Security</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              Your habit data is securely stored using Convex, a modern backend platform that provides:
            </p>
            <ul className="list-disc list-inside mt-2 text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 space-y-1">
              <li>End-to-end encryption for data transmission</li>
              <li>Secure cloud storage with industry-standard protection</li>
              <li>Regular security audits and updates</li>
              <li>Data backup and recovery capabilities</li>
            </ul>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-3">
              <h4 className="text-base font-[450] tracking-[-0.1px] text-blue-800 dark:text-blue-200 mb-1">Your Photos Remain Local</h4>
              <p className="text-sm tracking-[-0.1px] text-blue-700 dark:text-blue-300">
                Your actual photos never leave your device. We only store references that help the app remember which photos you selected for each habit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">6. Cloud Sync and Cross-Device Access</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              When you enable cloud sync, your habit data is stored securely in the cloud to allow access across multiple devices. This includes your habits,
              progress, and photo references, but never the actual photos themselves.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">7. Data Sharing and Third Parties</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              We do not sell, trade, or share your personal information with third parties, except:
            </p>
            <ul className="list-disc list-inside mt-2 text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 space-y-1">
              <li>Convex (our backend service provider) for data storage and sync</li>
              <li>App stores for payment processing of premium features</li>
              <li>When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">8. Photo Permissions</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              The app requires access to your photo library to allow you to select photos for habit verification. This permission is used only to display your
              photos for selection within the app. We do not access, copy, upload, or store your actual photos.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">9. Data Retention and Deletion</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              We retain your habit data as long as your account is active. You can delete your account and all associated data at any time through the app
              settings. Upon deletion, your data will be permanently removed from our servers within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">10. Children&apos;s Privacy</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have
              collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">11. Changes to This Privacy Policy</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              We may update this Privacy Policy from time to time. Any changes will be posted here with an updated effective date. We will notify users of
              significant changes through the app or other communication methods.
            </p>
          </section>

          <section>
            <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">12. Contact Us</h2>
            <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              If you have any questions about this Privacy Policy, please contact us at support@photohabit.app or through the app&apos;s support channels.
            </p>
          </section>
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="text-base font-[450] tracking-[-0.1px] text-blue-800 dark:text-blue-200 mb-1">Summary</h3>
          <p className="text-sm tracking-[-0.1px] text-blue-700 dark:text-blue-300">
            <strong>We protect your privacy while enabling cloud sync.</strong> PhotoHabit collects only the habit data needed for app functionality and cloud
            sync. Your actual photos never leave your device - we only store references to help you track your habits.
          </p>
        </div>
      </div>
    </main>
  );
}
