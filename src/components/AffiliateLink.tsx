interface AffiliateLinkProps {
  href: string;
  title: string;
  description?: string;
  buttonText?: string;
}

export default function AffiliateLink({
  href,
  title,
  description,
  buttonText = 'Check Price on Amazon',
}: AffiliateLinkProps) {
  return (
    <div className="my-6 border-2 border-[#D4A574]/40 rounded-xl p-5 bg-amber-50/60 hover:border-[#D4A574] transition-colors not-prose">
      <div className="flex items-start gap-4">
        <div className="text-3xl flex-shrink-0">🛒</div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-[#0A4D68] text-base mb-1 leading-snug">{title}</h4>
          {description && (
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{description}</p>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 bg-[#FF9900] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#e08800] transition-colors"
          >
            {buttonText} →
          </a>
        </div>
      </div>
    </div>
  );
}
