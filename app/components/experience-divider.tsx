import { AnimatePresence, motion } from 'motion/react';

export function ExperienceDivider({ isExpanded }: { isExpanded: boolean } = { isExpanded: true }) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="border-t border-dashed border-neutral-300 dark:border-neutral-700"
        animate={{ marginTop: isExpanded ? 24 : 18, marginBottom: isExpanded ? 24 : 18 }}
        transition={{ duration: 0.3, type: 'spring', bounce: 0 }}
      />
    </AnimatePresence>
  );
}
