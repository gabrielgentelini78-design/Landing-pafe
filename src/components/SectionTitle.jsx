import React from 'react'

const SectionTitle = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`space-y-3 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-gold-300/40 bg-gold-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-neutral-300 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
