/**
 * Section-Divider: dünne Gold-Haarlinie, die sich beim Scrollen zeichnet.
 * Animation wird von ScrollAnimations (IntersectionObserver) ausgelöst.
 */
export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`container-content ${className}`}>
      <div className="gold-line" aria-hidden="true" />
    </div>
  );
}
