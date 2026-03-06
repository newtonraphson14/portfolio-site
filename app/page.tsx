import { GitHubHighlights } from "@/components/sections/GitHubHighlights";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { OngoingWork } from "@/components/sections/OngoingWork";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { TechnicalFocus } from "@/components/sections/TechnicalFocus";
import { getHomePageData } from "@/lib/projects";

export default async function Home() {
  const {
    completedProjects,
    featuredProjects,
    ongoingProjects,
    focusAreas,
    highlights,
  } = await getHomePageData();

  return (
    <>
      <Hero
        completedCount={completedProjects.length}
        ongoingCount={ongoingProjects.length}
        focusCount={focusAreas.length}
      />
      <Intro />
      <SelectedProjects projects={featuredProjects} />
      <OngoingWork items={ongoingProjects} />
      <TechnicalFocus areas={focusAreas} />
      <GitHubHighlights items={highlights} />
    </>
  );
}
