import { motion } from 'framer-motion'
import { 
  Laptop, 
  Bot, 
  Settings, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  Network, 
  TrendingUp 
} from 'lucide-react'

const FloatingElements = () => {
  const elements = [
    { icon: Laptop, delay: 0, position: { top: '15%', left: '15%' } },
    { icon: Bot, delay: 2, position: { top: '65%', right: '15%' } },
    { icon: Settings, delay: 4, position: { bottom: '25%', left: '45%' } },
    { icon: Database, delay: 1, position: { top: '8%', right: '8%' }, size: 'small' },
    { icon: Cloud, delay: 3, position: { top: '45%', left: '8%' }, size: 'medium' },
    { icon: Shield, delay: 5, position: { bottom: '35%', right: '25%' }, size: 'medium' },
    { icon: Smartphone, delay: 1.5, position: { top: '75%', left: '25%' }, size: 'small' },
    { icon: Network, delay: 2.5, position: { top: '12%', left: '55%' }, size: 'large' },
    { icon: TrendingUp, delay: 3.5, position: { bottom: '8%', right: '8%' }, size: 'small' },
  ]

  const getSizeClasses = (size) => {
    switch (size) {
      case 'small':
        return 'w-12 h-12'
      case 'medium':
        return 'w-16 h-16'
      case 'large':
        return 'w-20 h-20'
      default:
        return 'w-16 h-16'
    }
  }

  const getIconSize = (size) => {
    switch (size) {
      case 'small':
        return 'h-6 w-6'
      case 'medium':
        return 'h-8 w-8'
      case 'large':
        return 'h-10 w-10'
      default:
        return 'h-8 w-8'
    }
  }

  return (
    <div className="relative w-full h-96 lg:h-[500px]">
      {elements.map((element, index) => {
        const Icon = element.icon
        return (
          <motion.div
            key={index}
            className={`absolute ${getSizeClasses(element.size)} bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700`}
            style={element.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 },
              scale: { duration: 0.5, delay: index * 0.1 },
              y: { 
                duration: 6, 
                delay: element.delay, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              },
              rotate: { 
                duration: 6, 
                delay: element.delay, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 10,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
            }}
          >
            <Icon className={`${getIconSize(element.size)} text-primary-600 dark:text-primary-400`} />
          </motion.div>
        )
      })}
      
      {/* Central floating element */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full shadow-2xl flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: 360
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          scale: { duration: 0.8, delay: 0.5 },
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
        }}
        whileHover={{ 
          scale: 1.2,
          boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)'
        }}
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Laptop className="h-12 w-12 text-white" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FloatingElements
