import { siteConfig } from "@/lib/site-config";

interface BookNowLinkProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * The single, canonical "Book Now" link. Always opens the salon's real
 * Vagaro booking page in a new tab with rel="noopener noreferrer".
 */
export default function BookNowLink({ className = "", children }: BookNowLinkProps) {
  return (
    <a
      href={siteConfig.vagaroUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? "Book Now"}
      <span className="sr-only"> (opens Vagaro in a new tab)</span>
    </a>
  );
}
