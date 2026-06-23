/**
 * HowItWorks.tsx — Premium dark 3-step strip.
 */

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  heading: string;
  steps: Step[];
  notice: string;
}

export default function HowItWorks({ heading, steps, notice }: HowItWorksProps) {
  return (
    <section style={{ backgroundColor: "#080A14", borderTop: "1px solid #1E2A42", borderBottom: "1px solid #1E2A42" }} className="py-9 md:py-11 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-xl md:text-2xl font-bold mb-6 text-center tracking-tight"
          style={{ color: "#F2EAD8" }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4 md:p-5 flex gap-4 md:items-start"
              style={{
                backgroundColor: "#0D1120",
                border: "1px solid rgba(244,239,227,0.08)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: "rgba(200,150,62,0.10)", color: "#C8963E" }}
                aria-hidden="true"
              >
                {idx + 1}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm md:text-[15px] leading-snug" style={{ color: "#F2EAD8" }}>
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "#8A8478" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-5 text-center text-xs md:text-sm max-w-2xl mx-auto rounded-lg px-4 py-3"
          style={{
            color: "#AFA79A",
            backgroundColor: "rgba(244,239,227,0.035)",
            border: "1px solid rgba(244,239,227,0.08)",
          }}
        >
          {notice}
        </p>
      </div>
    </section>
  );
}
