const codeLines = [
  "export async function deploy(app: App) {",
  "  const api = await laravel.serve(app.routes);",
  "  const web = await next.build({ ssr: true });",
  "  return scale([api, web], { replicas: 3 });",
  "}",
];

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute -top-48 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-accent/[0.14] blur-[140px]" />
      <div className="absolute top-1/3 -right-48 h-[460px] w-[460px] rounded-full bg-accent-2/[0.12] blur-[140px]" />
      <pre className="absolute bottom-24 left-6 hidden font-mono text-[11px] leading-6 text-white/[0.07] xl:block">
        {codeLines.join("\n")}
      </pre>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-canvas" />
    </div>
  );
}
