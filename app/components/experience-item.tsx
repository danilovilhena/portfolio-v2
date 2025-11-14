import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

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
}: ExperienceItemProps) {
  const getInvertClass = () => {
    if (invertInLight && invertInDark) return "invert";
    if (invertInLight) return "invert dark:invert-0";
    if (invertInDark) return "dark:invert";
    return "";
  };

  const logo = darkImage ? (
    <span className="inline-block">
      <Image
        src={image}
        alt={`${title.split(",")[1]?.trim() || "Company"} logo`}
        width={imageWidth}
        height={imageHeight}
        className="block dark:hidden"
      />
      <Image
        src={darkImage}
        alt={`${title.split(",")[1]?.trim() || "Company"} logo`}
        width={imageWidth}
        height={imageHeight}
        className="hidden dark:block"
      />
    </span>
  ) : (
    <Image
      src={image}
      alt={`${title.split(",")[1]?.trim() || "Company"} logo`}
      width={imageWidth}
      height={imageHeight}
      className={getInvertClass()}
    />
  );

  return (
    <div className="flex flex-col gap-4">
      {companyUrl ? (
        <Link
          href={`${companyUrl}?utm_source=danilovilhena`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          {logo}
        </Link>
      ) : (
        logo
      )}
      <div className="flex flex-col gap-0">
        <p className="text-sm font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">
          {title}
        </p>
        {description && (
          <p className="text-sm leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 mt-3 mb-3">
            {description}
          </p>
        )}
        <div className="flex items-center gap-2">
          <div className="bg-[#131414] dark:bg-neutral-100 rounded-[6px] flex-none h-2 w-[13px] opacity-30 dark:opacity-40 overflow-hidden relative will-change-transform" />
          <p className="text-sm tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
}
