import React from 'react'

const CTAButton = ({ label, href = '#', variant = 'primary' }) => {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300'
  const styles = {
    primary: `${base} bg-gold-300 text-neutral-950 shadow-glow hover:shadow-[0_0_25px_rgba(242,193,79,0.45)] hover:-translate-y-0.5`,
    outline: `${base} border border-gold-300/60 text-gold-300 hover:bg-gold-300/10`
  }

  return (
    <a className={styles[variant]} href={href} rel="noreferrer" target="_blank">
      {label}
    </a>
  )
}

export default CTAButton
