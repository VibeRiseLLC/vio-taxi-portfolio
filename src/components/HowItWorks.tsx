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
    <section style={{ backgroundColor: "#080A14", borderTop: "1px solid #1E2A42", borderBottom: "1px solid #1E2A42" }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl font-bold mb-10 text-center tracking-tight"
          style={{ color: "#F2EAD8" }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                backgroundColor: "#0D1120",
                border: "1px solid #1E2A42",
              }}
            >
              {/* Gold step number */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0"
                style={{ backgroundColor: "rgba(200,150,62,0.12)", border: "1.5px solid #C8963E", color: "#C8963E" }}
                aria-hidden="true"
              >
                {idx + 1}
              </div>
              <h3 className="font-semibold" style={{ color: "#F2EAD8" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8A8478" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer notice */}
        <p
          className="mt-8 text-center text-sm max-w-xl mx-auto rounded-xl px-5 py-3"
          style={{
            color: "#9A8460",
            backgroundColor: "rgba(200,150,62,0.06)",
            border: "1px solid rgba(200,150,62,0.18)",
          }}
        >
          ℹ️ {notice}
        </p>
      </div>
    </section>
  );
}
