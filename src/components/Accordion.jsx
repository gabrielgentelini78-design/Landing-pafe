import React, { useState } from 'react'

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
    <button
      className="flex w-full items-center justify-between gap-4 text-left"
      onClick={onToggle}
      type="button"
    >
      <span className="text-sm font-semibold text-white">{title}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-300/40 text-gold-300">
        {isOpen ? '-' : '+'}
      </span>
    </button>
    {isOpen && <p className="mt-3 text-sm text-neutral-300">{content}</p>}
  </div>
)

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}

export default Accordion
