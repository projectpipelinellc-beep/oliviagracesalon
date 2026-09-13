import { siteConfig } from "@/lib/site-config";

interface CallNowLinkProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * The single, canonical "Call Now" link. Always dials the salon's real
 * phone number via a tel: link.
 */
export default function CallNowLink({ className = "", children }: CallNowLinkProps) {
  const digits = siteConfig.contact.phone.replace(/\D/g, "");

  return (
    <a href={`tel:+1${digits}`} className={className}>
      {children ?? "Call Now"}
    </a>
  );
}
