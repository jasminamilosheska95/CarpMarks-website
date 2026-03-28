interface AffiliateLinkProps {
  href: string;
  title: string;
  description?: string;
  buttonText?: string;
  badge?: string;
}

export default function AffiliateLink({
  href,
  title,
  description,
  buttonText = 'Check Price on Amazon',
  badge,
}: AffiliateLinkProps) {
  return (
    <div className="affiliate-card my-6 not-prose rounded-2xl border border-[#D4A574]/25 bg-white shadow-sm overflow-hidden">
      {/* Top gradient accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#0A4D68] via-[#D4A574] to-[#0A4D68]" />

      <div className="flex items-stretch">
        {/* Left accent */}
        <div className="w-1 flex-shrink-0 bg-gradient-to-b from-[#D4A574] to-[#b8854f]" />

        <div className="flex-1 px-5 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {badge && (
                <span className="inline-block bg-[#0A4D68]/10 text-[#0A4D68] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2">
                  {badge}
                </span>
              )}
              <h4 className="font-bold text-gray-900 text-[0.9375rem] leading-snug mb-1.5">{title}</h4>
              {description && (
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              )}
            </div>

            {/* Amazon smile mark */}
            <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#FF9900]/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-label="Amazon">
                <path d="M20.06 18.11c-3.55 2.62-8.69 4.01-13.13 4.01-6.21 0-11.81-2.3-16.04-6.12-.33-.3-.04-.71.36-.48 4.57 2.66 10.21 4.26 16.04 4.26 3.93 0 8.25-.82 12.22-2.5.6-.26 1.1.39.55.83z" fill="#FF9900"/>
                <path d="M21.54 16.43c-.46-.58-3.01-.28-4.15-.14-.35.04-.4-.26-.09-.48 2.03-1.43 5.36-.91 5.75-.48.39.44-.1 3.78-2.01 5.36-.29.25-.57.12-.44-.2.43-1.07 1.39-3.47.94-4.06z" fill="#FF9900"/>
                <path d="M13.98 10.81c0 .95.02 1.74-.46 2.58-.39.69-.99 1.1-1.68 1.1-1.01 0-1.6-.77-1.6-1.9 0-2.23 2-2.64 3.74-2.64v.86zm2.54 6.13c-.17.15-.41.16-.6.06-1.02-.85-1.2-1.25-1.76-2.06-1.68 1.71-2.87 2.22-5.04 2.22-2.57 0-4.57-1.59-4.57-4.76 0-2.48 1.34-4.16 3.26-4.99 1.65-.74 3.96-.87 5.72-1.07v-.4c0-.73.06-1.59-.38-2.22-.38-.56-1.1-.79-1.73-.79-1.18 0-2.22.6-2.48 1.85-.05.28-.27.55-.55.56l-3.08-.33c-.26-.06-.55-.27-.48-.67C5.86 2.37 8.94 1.3 11.69 1.3c1.43 0 3.3.38 4.43 1.46 1.43 1.33 1.29 3.11 1.29 5.05v4.57c0 1.37.57 1.97 1.1 2.71.19.26.23.57-.01.76-.6.5-1.65 1.42-2.23 1.94l-.01-.01-.73-.84z" fill="#FF9900"/>
              </svg>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-shimmer inline-flex items-center gap-2 bg-[#FF9900] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#e08800] active:scale-95 transition-all duration-150 shadow-sm shadow-[#FF9900]/25"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {buttonText}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
