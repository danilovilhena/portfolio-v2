import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectItemProps {
  image: string;
  title: string;
  description: string;
  projectUrl: string;
  date?: string;
  tag?: string;
  imageWidth?: number;
  imageHeight?: number;
  icon?: ReactNode;
}

export function ProjectItem({ image, title, description, projectUrl, date = '2024', tag, imageWidth = 32, imageHeight = 32, icon }: ProjectItemProps) {
  return (
    <Link
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 py-2 px-3 -mx-3 rounded-lg transition-colors hover:bg-[#EBEEEA] dark:hover:bg-[#2D2D2D] group"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {icon ? icon : <Image src={image} alt={`${title} logo`} width={imageWidth} height={imageHeight} className="object-contain" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">{title}</h3>
          <div className="bg-[#131414] dark:bg-neutral-100 rounded-[6px] flex-none size-1 opacity-30 dark:opacity-40 overflow-hidden relative will-change-transform" />
          <span className="text-xs tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">{date}</span>
          {tag && (
            <span className="text-[9px] tracking-[-0.1px] px-1.5 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 font-[450]">
              {tag}
            </span>
          )}
        </div>
        <p className="text-xs tracking-[-0.1px] text-neutral-500 dark:text-neutral-400 mt-1">{description}</p>
      </div>
    </Link>
  );
}
