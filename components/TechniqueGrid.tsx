import SectionTitle from "@/components/SectionTitle";
import { fabrics, techniques } from "@/data/techniques";

export default function TechniqueGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <SectionTitle eyebrow="Material base" title="Common fabrics" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {fabrics.map((fabric) => (
            <div className="rounded-md border border-ink/10 bg-white p-4 text-sm font-semibold text-ink/75" key={fabric}>
              {fabric}
            </div>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle eyebrow="Custom details" title="Common techniques" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {techniques.map((technique) => (
            <div className="rounded-md border border-ink/10 bg-white p-4 text-sm font-semibold text-ink/75" key={technique}>
              {technique}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
