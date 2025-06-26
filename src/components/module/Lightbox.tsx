import React from 'react'

export default function Lightbox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Outer glow border animated light */}
      <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-tr from-white-500/20 via-white-600/10 to-blue-500/20 opacity-40 animate-pulse pointer-events-none" />

      {/* Inner radial light */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-25 pointer-events-none rounded-2xl" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
