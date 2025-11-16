import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ExperienceItemProps {
  image: string;
  title: string;
  description?: string | ReactNode;
  duration: string;
  companyUrl?: string;
  invertInLight?: boolean;
  invertInDark?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  darkImage?: string;
  isExpanded: boolean;
}

export function ExperienceItem({
  image,
  title,
  description,
  duration,
  companyUrl,
  invertInLight = false,
  invertInDark = false,
  imageWidth = 32,
  imageHeight = 32,
  darkImage,
  isExpanded,
}: ExperienceItemProps) {
  const getInvertClass = () => {
    if (invertInLight && invertInDark) return 'invert';
    if (invertInLight) return 'invert dark:invert-0';
    if (invertInDark) return 'dark:invert';
    return '';
  };

  const logo = darkImage ? (
    <span className="inline-block">
      <motion.img
        src={image}
        alt={`${title.split(',')[1]?.trim() || 'Company'} logo`}
        width={imageWidth}
        height={imageHeight}
        className="block dark:hidden"
        animate={{
          scale: isExpanded ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, type: 'spring', bounce: 0 }}
      />
      <motion.img
        src={darkImage}
        alt={`${title.split(',')[1]?.trim() || 'Company'} logo`}
        width={imageWidth}
        height={imageHeight}
        className="hidden dark:block"
        animate={{
          scale: isExpanded ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, type: 'spring', bounce: 0 }}
      />
    </span>
  ) : (
    <motion.img
      src={image}
      alt={`${title.split(',')[1]?.trim() || 'Company'} logo`}
      width={imageWidth}
      height={imageHeight}
      className={getInvertClass()}
      animate={{
        scale: isExpanded ? 1 : 0.8,
      }}
      transition={{ duration: 0.3, type: 'spring', bounce: 0 }}
    />
  );

  return (
    <AnimatePresence initial={false}>
      <motion.div className="flex flex-col relative" layout>
        {companyUrl ? (
          <Link href={`${companyUrl}?utm_source=danilovilhena`} target="_blank" rel="noopener noreferrer" className="w-fit min-w-fit">
            {logo}
          </Link>
        ) : (
          logo
        )}
        <motion.div
          className="flex flex-col gap-0 overflow-hidden"
          animate={{
            height: isExpanded ? 'auto' : 0,
            filter: isExpanded ? 'blur(0px)' : 'blur(4px)',
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? 16 : 0,
          }}
          transition={{ duration: 0.3, type: 'spring', bounce: 0 }}
        >
          <p className="text-sm font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">{title}</p>
          {description && <p className="text-sm leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 mt-3 mb-3">{description}</p>}
          <div className="flex items-center gap-2">
            <div className="bg-[#131414] dark:bg-neutral-100 rounded-[6px] flex-none h-2 w-[13px] opacity-30 dark:opacity-40 overflow-hidden relative will-change-transform" />
            <p className="text-sm tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">{duration}</p>
          </div>
        </motion.div>
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-1 flex-row gap-2 items-center whitespace-nowrap"
          animate={{
            height: !isExpanded ? 'auto' : 0,
            filter: !isExpanded ? 'blur(0px)' : 'blur(4px)',
            opacity: !isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, type: 'spring', bounce: 0 }}
        >
          <p className="text-sm font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">{title}</p>
          <div className="flex items-center gap-2">
            <div className="bg-[#131414] dark:bg-neutral-100 rounded-[6px] flex-none size-1 opacity-30 dark:opacity-40 overflow-hidden relative will-change-transform" />
            <p className="text-[13px] tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">{duration}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
