export default function PhotoHabitSupport() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-20 pb-4">
      <div className="flex flex-col items-center text-center">
        {/* Logo placeholder - would need actual PhotoHabit logo */}
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">PH</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-lg font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-6">PhotoHabit</h1>

        {/* Support Content */}
        <div className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl w-full">
          <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-4">Need Help?</h2>

          <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 mb-6">
            We&apos;re here to help you build better habits! If you have any questions, feedback, or need support with PhotoHabit, don&apos;t hesitate to reach
            out. Whether you need help with photo verification, tracking your progress, or understanding premium features, we&apos;re ready to assist.
          </p>

          <div className="space-y-4">
            {/* Email Contact */}
            <div className="bg-neutral-50 dark:bg-neutral-800/30 rounded-lg p-4">
              <h3 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">Contact us via email</h3>
              <a
                href="mailto:support@photohabit.app"
                className="text-base tracking-[-0.1px] text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                support@photohabit.app
              </a>
            </div>

            {/* Social Media Contact */}
            <div className="bg-neutral-50 dark:bg-neutral-800/30 rounded-lg p-4">
              <h3 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">Follow us on social media</h3>
              <div className="space-y-1">
                <a
                  href="https://twitter.com/photohabit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base tracking-[-0.1px] text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 block"
                >
                  @photohabit on Twitter
                </a>
                <a
                  href="https://instagram.com/photohabit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base tracking-[-0.1px] text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200 block"
                >
                  @photohabit on Instagram
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-neutral-50 dark:bg-neutral-800/30 rounded-lg p-4 text-left">
              <h3 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-3">Frequently Asked Questions</h3>
              <div className="space-y-3 text-sm tracking-[-0.1px]">
                <div>
                  <h4 className="text-neutral-900 dark:text-neutral-100 font-[450] mb-1">Do you store my photos?</h4>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    No! Your photos never leave your device. We only store references to photos you select from your library.
                  </p>
                </div>
                <div>
                  <h4 className="text-neutral-900 dark:text-neutral-100 font-[450] mb-1">How do I track a habit?</h4>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Create a habit, then each day take or select a photo that proves you completed it. The app will track your streaks automatically.
                  </p>
                </div>
                <div>
                  <h4 className="text-neutral-900 dark:text-neutral-100 font-[450] mb-1">What happens if I delete a photo from my phone?</h4>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    The habit entry will show that the photo is no longer available, but your progress and streak data remain intact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-sm tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">Response time: We typically respond within 24 hours on weekdays.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
