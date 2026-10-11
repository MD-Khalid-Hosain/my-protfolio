import { FadeIn } from "@/components/fade-in";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What people I've worked with say."
      />
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} as="li" delay={index * 0.06}>
            <TestimonialCard testimonial={testimonial} />
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
