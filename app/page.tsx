'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon } from './components/icons/github';
import { LinkedinIcon } from './components/icons/linkedin';
import { ThemeToggle } from './components/theme-toggle';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 mx-auto w-full max-w-(--breakpoint-sm) pt-20 px-4 pb-4">
        <header className="flex items-center gap-4">
          <Image src="/icon.png" alt="Danilo Vilhena profile picture" className="rounded-full" width={52} height={52} />
          <div className="flex flex-col gap-0">
            <h1 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">
              <a href="/">Danilo Vilhena</a>
            </h1>
            <p className="text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">Full Stack Engineer</p>
          </div>
        </header>
        <main className="mt-12">
          <div className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
            I build software with <span className="highlight">care</span> and <span className="highlight">intention</span>, focusing on performance,
            reliability, and the details that elevate product quality. I work thoughtfully across the stack to create systems that feel solid and predictable.
            <br />
            <br />I value well-written code, refined interactions, and well-structured design. Every layer is considered, clarity and organization drives how I
            build.
          </div>

          <ExperienceSection />
          <ProjectsSection />
        </main>
      </div>
      <footer className="mx-auto w-full max-w-(--breakpoint-sm) px-4 py-4 mt-16 flex items-center justify-between">
        <p className="text-[12px] text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Danilo Vilhena</p>
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="sm" className="text-xs font-[450] size-6 px-1.5 rounded-sm active:scale-95">
            <Link href="https://github.com/danilovilhena" target="_blank" rel="noopener noreferrer" title="GitHub">
              <GithubIcon />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-xs font-[450] size-6 px-1.5 rounded-sm active:scale-95">
            <Link href="https://linkedin.com/in/danilo-vilhena" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedinIcon />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
