'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AnimationContextType {
  startupComplete: boolean
  setStartupComplete: (complete: boolean) => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [startupComplete, setStartupComplete] = useState(false)

  return (
    <AnimationContext.Provider value={{ startupComplete, setStartupComplete }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}
