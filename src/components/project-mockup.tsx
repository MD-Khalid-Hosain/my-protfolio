import { MessageCircle, Mic, Play, Plane, Search, ShoppingBag, Video } from "lucide-react";
import type { MockupVariant } from "@/types";

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f15] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-subtle">
          {url}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function MediaMockup() {
  return (
    <BrowserFrame url="VideoXRM — Media library">
      <div className="flex gap-3">
        <div className="hidden w-16 shrink-0 space-y-2 sm:block">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-2 rounded ${i === 1 ? "bg-accent/60" : "bg-white/10"}`} />
          ))}
        </div>
        <div className="flex-1">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-accent/30 via-accent-2/20 to-transparent">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-canvas">
              <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
            </span>
            <span className="absolute bottom-2 left-2 rounded bg-black/50 px-1.5 py-0.5 font-mono text-[9px] text-white/80">
              AI-driven media
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-video rounded-md bg-white/[0.05]" />
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function TravelMockup() {
  return (
    <BrowserFrame url="journeytonippon.com">
      <div className="relative overflow-hidden rounded-lg bg-linear-to-br from-[#ff6b8b]/30 via-accent-2/20 to-accent/20 p-5">
        <p className="font-mono text-[9px] tracking-widest text-white/60 uppercase">Explore Japan</p>
        <div className="mt-2 h-3 w-3/4 rounded bg-white/70" />
        <div className="mt-2 h-3 w-1/2 rounded bg-white/40" />
        <div className="mt-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-2 backdrop-blur">
          <Search className="h-3 w-3 text-white/60" />
          <div className="h-1.5 flex-1 rounded bg-white/20" />
          <Plane className="h-3 w-3 text-accent" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Tokyo", "Kyoto", "Osaka"].map((city) => (
          <div key={city} className="rounded-md border border-white/[0.06] bg-white/[0.03] p-2">
            <div className="aspect-[4/3] rounded bg-white/[0.06]" />
            <p className="mt-1.5 text-[10px] text-white/60">{city}</p>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function MessagingMockup() {
  return (
    <div className="flex items-end justify-center gap-4">
      <div className="w-44 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0f15] p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:w-48">
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/15" />
        <div className="space-y-2 rounded-2xl bg-white/[0.02] p-3">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-linear-to-br from-accent to-accent-2" />
            <div className="h-1.5 w-16 rounded bg-white/20" />
            <Video className="ml-auto h-3 w-3 text-accent" />
          </div>
          <div className="w-3/4 rounded-xl rounded-tl-sm bg-white/[0.07] p-2">
            <div className="h-1.5 w-full rounded bg-white/20" />
          </div>
          <div className="ml-auto w-2/3 rounded-xl rounded-tr-sm bg-accent/25 p-2">
            <div className="h-1.5 w-full rounded bg-accent/60" />
          </div>
          <div className="w-1/2 rounded-xl rounded-tl-sm bg-white/[0.07] p-2">
            <div className="h-1.5 w-full rounded bg-white/20" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/[0.05] px-2 py-1.5">
            <MessageCircle className="h-3 w-3 text-white/40" />
            <div className="h-1.5 flex-1 rounded bg-white/10" />
          </div>
        </div>
      </div>
      <div className="mb-8 hidden w-36 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0f15] p-2 sm:block">
        <div className="relative flex aspect-[3/4] items-center justify-center rounded-2xl bg-linear-to-br from-accent-2/30 to-accent/20">
          <span className="h-12 w-12 rounded-full bg-white/20" />
          <span className="absolute top-2 right-2 h-10 w-8 rounded-md border border-white/20 bg-black/40" />
          <span className="absolute bottom-2 flex gap-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
              <Mic className="h-3 w-3 text-white" />
            </span>
            <span className="h-6 w-6 rounded-full bg-[#ff4d6d]" />
          </span>
        </div>
        <p className="mt-1.5 text-center font-mono text-[9px] text-accent">● Live · WebRTC</p>
      </div>
    </div>
  );
}

function CommerceMockup() {
  return (
    <BrowserFrame url="originalstorebd.com">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-20 rounded bg-white/30" />
        <span className="flex items-center gap-1 rounded-full bg-accent/20 px-2 py-1 font-mono text-[9px] text-accent">
          <ShoppingBag className="h-3 w-3" /> 3
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-md border border-white/[0.06] bg-white/[0.03] p-1.5">
            <div
              className={`aspect-square rounded ${
                i % 3 === 0
                  ? "bg-linear-to-br from-accent/30 to-transparent"
                  : i % 3 === 1
                    ? "bg-linear-to-br from-accent-2/30 to-transparent"
                    : "bg-white/[0.06]"
              }`}
            />
            <div className="mt-1.5 h-1.5 w-3/4 rounded bg-white/20" />
            <div className="mt-1 h-1.5 w-1/3 rounded bg-accent/50" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

const mockups: Record<MockupVariant, () => React.ReactElement> = {
  media: MediaMockup,
  travel: TravelMockup,
  messaging: MessagingMockup,
  commerce: CommerceMockup,
};

export function ProjectMockup({ variant }: { variant: MockupVariant }) {
  const Mockup = mockups[variant];
  return <Mockup />;
}
