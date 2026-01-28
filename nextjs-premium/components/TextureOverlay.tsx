'use client'

export default function TextureOverlay() {
  return (
    <>
      {/* Alcantara texture - more pronounced */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.08]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0.04) 2px),
              repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0.04) 2px),
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
            `,
            backgroundSize: '4px 4px, 4px 4px, 8px 8px',
          }}
        />
      </div>
      
      {/* Subtle noise texture */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply',
        }}
      />
    </>
  )
}
