import { MessageCircle } from "lucide-react";
import { defaultWhatsAppMessage, siteInfo } from "@/data/site";

export { defaultWhatsAppMessage };
export const whatsappDisplay = siteInfo.whatsappDisplay;

export function getWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  className?: string;
  sticky?: boolean;
};

export default function WhatsAppButton({
  label = "Send Design on WhatsApp",
  message = defaultWhatsAppMessage,
  className = "",
  sticky = false,
}: WhatsAppButtonProps) {
  if (sticky) {
    return (
      <a
        aria-label="Send inquiry on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-white shadow-lg transition hover:bg-[#178548] sm:w-auto sm:px-5"
        href={getWhatsAppUrl(message)}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" className="h-7 w-7 sm:h-5 sm:w-5" />
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      </a>
    );
  }

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 ${className}`}
      href={getWhatsAppUrl(message)}
      rel="noreferrer"
      target="_blank"
    >
      {label}
      <MessageCircle aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
