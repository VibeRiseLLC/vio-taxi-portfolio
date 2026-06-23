/**
 * ServiceCard.tsx — Premium dark card with gold accent line.
 */

import Button from "./Button";
import { BUSINESS } from "@/lib/business";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  showActions?: boolean;
  bookLabel?: string;
  whatsappLabel?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  showActions = false,
  bookLabel = "Plan dit traject",
  whatsappLabel = "Vraag via WhatsApp",
}: ServiceCardProps) {
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hello Noordlijn Chauffeurs, I would like to request a quote for: ${title}`
  )}`;

  return (
    <div
      className="flex flex-col gap-4 rounded-2xl p-6 transition-all hover:-translate-y-0.5"
      style={{
        backgroundColor: "#0D1120",
        border: "1px solid #1E2A42",
        borderTop: "2px solid #C8963E",
        /* subtle purple ambient glow on hover — handled via CSS class */
      }}
    >
      <div className="text-3xl" aria-hidden="true">{icon}</div>
      <h3 className="font-semibold text-lg" style={{ color: "#F2EAD8" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#8A8478" }}>
        {description}
      </p>
      {showActions && (
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button href="/book" variant="primary" className="text-sm py-2.5 flex-1">
            {bookLabel}
          </Button>
          <Button href={waUrl} external variant="secondary" className="text-sm py-2.5 flex-1">
            {whatsappLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
