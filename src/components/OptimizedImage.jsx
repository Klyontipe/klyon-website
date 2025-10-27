import { useState } from 'react'
import { motion } from 'framer-motion'

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded" />
      )}
      
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image non disponible</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage
