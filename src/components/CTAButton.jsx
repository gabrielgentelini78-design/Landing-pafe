import React from 'react'

const CTAButton = ({ label, href = '#', variant = 'primary' }) => {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition'
  const styles = {
    primary: `${base} bg-gold-300 text-neutral-950 shadow-glow hover:bg-gold-200`,
    outline: `${base} border border-gold-300/60 text-gold-300 hover:bg-gold-300/10`
  }

  return (
    <a className={styles[variant]} href={href}>
      {label}
    </a>
  )
}

export default CTAButton
