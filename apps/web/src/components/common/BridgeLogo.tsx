interface BridgeLogoProps {
  className?: string;
  markOnly?: boolean;
}

/**
 * Suspension-bridge mark, matching the approved brand mockups:
 * two angled towers with cable lines meeting at a peak.
 */
export function BridgeLogo({ className = "", markOnly = false }: BridgeLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-white dark:text-white"
      >
        <path d="M2 20L14 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 20L14 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 20L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
        <path d="M22 20L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
        <path d="M0 20H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 20L14 11L19 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
      </svg>
      {!markOnly && (
        <span className="font-display text-lg font-bold text-white dark:text-white">
          EduBridge
        </span>
      )}
    </div>
  );
}
