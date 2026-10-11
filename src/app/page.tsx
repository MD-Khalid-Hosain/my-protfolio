import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Credentials } from "@/sections/credentials";
import { Experience } from "@/sections/experience";
import { GitHubActivity } from "@/sections/github-activity";
import { Hero } from "@/sections/hero";
import { Journey } from "@/sections/journey";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Journey />
      <Projects />
      <GitHubActivity />
      <Testimonials />
      <Credentials />
      <Contact />
    </main>
  );
}
