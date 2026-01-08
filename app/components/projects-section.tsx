import { ProjectItem } from './project-item';
import { EyeIcon } from './icons/eye';

export function ProjectsSection() {
  return (
    <div className="mt-16">
      <h2 className="text-[15px] font-[450] tracking-[-0.16px] text-neutral-900 dark:text-neutral-100">Projects</h2>
      <div className="mt-6 flex flex-col gap-3">
        <ProjectItem
          image="/projects/turbosql.png"
          title="TurboSQL"
          description="The fastest SQL GUI you've ever used"
          projectUrl="https://turbosql.co"
          date="May 2025"
          imageWidth={28}
          imageHeight={28}
        />
        <ProjectItem
          image="/projects/minilist.svg"
          title="Mini List"
          description="Minimalist to-do list app"
          projectUrl="https://minilist.pro"
          date="Oct 2025"
          imageWidth={28}
          imageHeight={28}
        />
        <ProjectItem
          image=""
          title="OG Preview"
          description="The ultimate OG image gallery"
          projectUrl="https://ogpreview.co"
          date="Oct 2025"
          tag="Archived"
          icon={<EyeIcon className="size-7 text-sky-600 dark:text-sky-400" />}
        />
        <ProjectItem
          image="/projects/banana-post.svg"
          title="Banana Post"
          description="Schedule your social media content effortlessly"
          projectUrl="https://banana-post.com"
          date="Jan 2025"
          tag="Archived"
        />
        <ProjectItem
          image="/projects/memorizai.png"
          title="Memorizaí"
          description="Learn anything with spaced repetition"
          projectUrl="https://memorizai.vercel.app"
          date="May 2024"
          tag="Archived"
          imageWidth={28}
          imageHeight={28}
        />
      </div>
    </div>
  );
}
