import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./components/theme-toggle";
import { GithubIcon } from "./components/icons/github";
import { LinkedinIcon } from "./components/icons/linkedin";
import { Button } from "@/components/ui/button";
import { ExperienceItem } from "./components/experience-item";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 mx-auto w-full max-w-(--breakpoint-sm) pt-20 px-4 pb-4">
        <header className="flex items-center gap-4">
          <Image
            src="/icon.png"
            alt="Danilo Vilhena profile picture"
            className="rounded-full"
            width={52}
            height={52}
          />
          <div className="flex flex-col gap-0">
            <h1 className="text-base font-[450] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">
              <a href="/">Danilo Vilhena</a>
            </h1>
            <p className="text-base tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
              Full Stack Engineer
            </p>
          </div>
        </header>
        <main className="mt-8">
          <div className="text-base leading-relaxed tracking-[-0.1px] text-neutral-500 dark:text-neutral-400">
            I build software with <span className="highlight">care</span> and{" "}
            <span className="highlight">intention</span>, focusing on
            performance, reliability, and the details that elevate product
            quality. I work thoughtfully across the stack to create systems that
            feel solid and predictable.
            <br />
            <br />I value well-written code, refined interactions, and
            well-structured design. Every layer is considered, clarity and
            organization drives how I build.
          </div>

          <div className="mt-12">
            <h2 className="text-[15px] font-[450] tracking-[-0.16px] text-neutral-900 dark:text-neutral-100">
              Experience
            </h2>
            <div className="mt-6 flex flex-col">
              <ExperienceItem
                image="/mindcloud.svg"
                title="Full Stack Engineer, MindCloud"
                duration="2024 - Present"
                companyUrl="https://mindcloud.co/"
                invertInLight={true}
                description={
                  <>
                    At MindCloud, we have a{" "}
                    <span className="highlight">fast-growing environment</span>{" "}
                    where the initial focus was white-glove solutions built on
                    top of a strong platform. Now, our focus is strengthening
                    the SaaS product itself, making it faster, clearer to use,
                    and more capable. The platform is designed with AI in mind,
                    the product quality is super high, and I am focused on
                    helping it become the{" "}
                    <span className="highlight">
                      leading product in this automations market
                    </span>
                    .
                  </>
                }
              />
              <div className="my-6 border-t border-dashed border-neutral-300 dark:border-neutral-700" />
              <ExperienceItem
                image="/chamaileon.svg"
                title="Full Stack Engineer, Chamaileon"
                duration="2022 - 2024"
                companyUrl="https://chamaileon.io/"
                invertInDark={true}
                description={
                  <>
                    I worked in a small engineering team, improving stability
                    and cleaning up{" "}
                    <span className="highlight">long-standing issues</span>. I
                    focused on fixing core bugs and tightening the user
                    experience. Details really matter. Most of my time was spent
                    on a{" "}
                    <span className="highlight">full rewrite and redesign</span>{" "}
                    of the platform, making the frontend more cohesive and
                    organized, and the backend faster and more secure.
                  </>
                }
              />
              <div className="my-6 border-t border-dashed border-neutral-300 dark:border-neutral-700" />
              <ExperienceItem
                image="/lead.svg"
                title="Frontend Developer, Lead Dell"
                duration="2020 - 2022"
                companyUrl="https://leadfortaleza.com.br/portal"
                imageWidth={89}
                imageHeight={19}
                darkImage="/lead-white.svg"
                description={
                  <>
                    I began as an intern and grew into a full-time engineer,
                    working on products designed to make the web{" "}
                    <span className="highlight">
                      more accessible to everyone
                    </span>
                    . Most of my work focused on the WAL browser extension,
                    where we added customization tools, visual adjustments, and
                    early AI-powered descriptions to make the web more usable
                    for people with{" "}
                    <span className="highlight">
                      visual, hearing, or motor impairments
                    </span>
                    . It was a mission-driven environment. It shaped how I
                    think.
                  </>
                }
              />
            </div>
          </div>
        </main>
      </div>
      <footer className="mx-auto w-full max-w-(--breakpoint-sm) px-4 py-4 mt-16 flex items-center justify-between">
        <p className="text-[12px] text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Danilo Vilhena
        </p>
        <div className="flex items-center gap-1">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-xs font-[450] size-6 px-1.5 rounded-sm active:scale-95"
          >
            <Link
              href="https://github.com/danilovilhena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-xs font-[450] size-6 px-1.5 rounded-sm active:scale-95"
          >
            <Link
              href="https://linkedin.com/in/danilo-vilhena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
