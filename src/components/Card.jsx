import React from 'react'

const Card = ({ icon, title, description, tone = 'neutral' }) => {
  const toneMap = {
    neutral: 'border-white/10',
    highlight: 'border-gold-300/40 bg-gold-300/5'
  }

  return (
    <div className={`rounded-2xl border ${toneMap[tone]} bg-neutral-900/70 p-5 backdrop-blur`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-300/15 text-gold-300">
          <span className="text-lg font-semibold">{icon}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm text-neutral-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
