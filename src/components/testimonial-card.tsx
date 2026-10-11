import { Quote } from "lucide-react";
import Image from "next/image";
import { SpotlightCard } from "@/components/spotlight-card";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <SpotlightCard className="h-full">
      <figure className="flex h-full flex-col p-6 sm:p-8">
        <Quote className="h-6 w-6 text-accent/70" aria-hidden="true" />
        <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-ink/90">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-accent/30 to-accent-2/30 text-xs font-semibold text-ink">
              {initials}
            </span>
          )}
          <div>
            <p className="text-sm font-medium text-ink">{testimonial.name}</p>
            <p className="text-xs text-muted">
              {testimonial.title} · {testimonial.company}
            </p>
          </div>
        </figcaption>
      </figure>
    </SpotlightCard>
  );
}
