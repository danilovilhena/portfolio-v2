export default function PlantifierSupport() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-20 pb-4">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="/big-timer.png"
            alt="Stopwatch Logo"
            className="w-16 h-16 mx-auto rounded-xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-lg font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-6">Stopwatch</h1>

        {/* Support Content */}
        <div className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl w-full">
          <h2 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-4">Need Help?</h2>

          <p className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 mb-6">
            We&apos;re here to help! If you have any questions, feedback, or
            need support with Stopwatch - Simple Big Timer, don&apos;t hesitate
            to reach out.
          </p>

          <div className="space-y-4">
            {/* Email Contact */}
            <div className="bg-neutral-50 dark:bg-neutral-800/30 rounded-lg p-4">
              <h3 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">
                Contact me via email
              </h3>
              <a
                href="mailto:danilo.vilhena@gmail.com"
                className="text-base tracking-[-0.1px] text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                danilo.vilhena@gmail.com
              </a>
            </div>

            {/* X (Twitter) Profile */}
            <div className="bg-neutral-50 dark:bg-neutral-800/30 rounded-lg p-4">
              <h3 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100 mb-2">
                Contact me via X
              </h3>
              <a
                href="https://x.com/danilo_swe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base tracking-[-0.1px] text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                @danilo_swe
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
