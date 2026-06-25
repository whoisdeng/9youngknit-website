import { workflow } from "@/data/workflow";

export default function ProcessSteps() {
  return (
    <div className="grid gap-4">
      {workflow.map((step, index) => (
        <article className="grid gap-4 rounded-lg border border-ink/10 bg-white p-5 sm:grid-cols-[4rem_1fr]" key={step.title}>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-oat text-base font-semibold text-ink">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
