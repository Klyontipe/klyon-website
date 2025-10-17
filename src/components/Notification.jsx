import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Info, X } from 'lucide-react'
import { useContact } from '../contexts/ContactContext'

const Notification = () => {
  const { notification } = useContact()

  if (!notification) return null

  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
  }

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }

  const Icon = icons[notification.type] || Info

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-4 right-4 z-50 max-w-sm w-full"
      >
        <div className={`${colors[notification.type]} text-white p-4 rounded-lg shadow-lg`}>
          <div className="flex items-start space-x-3">
            <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Notification
