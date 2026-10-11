"use client";

import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { profile } from "@/data/profile";

const fieldClass =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 text-sm text-ink placeholder:text-subtle outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.05]";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          Name
          <input name="name" required autoComplete="name" placeholder="Jane Doe" className={`${fieldClass} h-12`} />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={`${fieldClass} h-12`}
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-muted">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role or project…"
          className={`${fieldClass} resize-none py-3`}
        />
      </label>
      <button
        type="submit"
        className="group mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-canvas transition-colors hover:bg-white"
      >
        Send message
        <Send
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </button>
      <p className="text-xs text-subtle" aria-live="polite">
        {status === "opened"
          ? `Your email app should now be open with a message to ${profile.email}.`
          : "Opens your email app with the message pre-filled."}
      </p>
    </form>
  );
}
