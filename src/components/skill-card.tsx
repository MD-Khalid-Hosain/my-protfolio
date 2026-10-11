import { IconTile } from "@/components/icon-tile";
import { SpotlightCard } from "@/components/spotlight-card";
import { TechIcon } from "@/components/tech-icon";
import type { SkillCategory } from "@/types";

export function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <SpotlightCard as="article" className="h-full p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <IconTile float>
          <TechIcon name={category.icon} className="h-[18px] w-[18px]" />
        </IconTile>
        <div>
          <h3 className="text-base font-semibold tracking-tight text-ink">{category.title}</h3>
          <p className="text-xs text-muted">{category.description}</p>
        </div>
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fill,minmax(4.75rem,1fr))]">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="group/tile flex items-center gap-2.5 rounded-xl border border-line bg-white/[0.02] px-2.5 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/[0.06] hover:shadow-[0_12px_30px_-12px_rgba(45,226,198,0.45)] sm:flex-col sm:px-2 sm:py-4 sm:text-center"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-canvas/60 text-accent transition-transform duration-300 group-hover/tile:scale-110 group-hover/tile:-rotate-6 sm:h-10 sm:w-10">
              <TechIcon name={item.icon} className="h-[18px] w-[18px]" />
            </span>
            <span className="text-[13px] leading-tight font-medium text-ink/90">{item.name}</span>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}
