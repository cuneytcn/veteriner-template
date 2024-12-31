'use client'

import * as React from 'react'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

interface ToastProps {
    id: string
    title: string
    description?: string
    variant?: 'default' | 'success' | 'destructive'
    onClose: () => void
}

const ToastContext = React.createContext<{
    toast: (props: Omit<ToastProps, 'id' | 'onClose'>) => void
}>({
    toast: () => {},
})

export function useToast() {
    return React.useContext(ToastContext)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = React.useState<ToastProps[]>([])

    const toast = React.useCallback((props: Omit<ToastProps, 'id' | 'onClose'>) => {
        const id = Math.random().toString(36).slice(2)
        setToasts((prev) => [...prev, { ...props, id, onClose: () => removeToast(id) }])

        setTimeout(() => {
            removeToast(id)
        }, 5000)
    }, [])

    const removeToast = React.useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className='fixed bottom-0 right-0 z-50 m-6 flex max-w-[420px] flex-col gap-4'>
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <Toast key={toast.id} {...toast} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    )
}

function Toast({ title, description, variant = 'default', onClose }: ToastProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={clsx(
                'relative w-full overflow-hidden rounded-lg p-4 shadow-lg',
                variant === 'default' && 'bg-white text-gray-900',
                variant === 'success' && 'bg-green-50 text-green-900',
                variant === 'destructive' && 'bg-red-50 text-red-900',
            )}>
            <div className='flex items-start gap-3'>
                <div className='flex-1'>
                    <div className='font-medium'>{title}</div>
                    {description && <div className='mt-1 text-sm opacity-90'>{description}</div>}
                </div>
                <button
                    onClick={onClose}
                    className={clsx(
                        'rounded-lg p-1 opacity-70 transition-opacity hover:opacity-100',
                        variant === 'default' && 'hover:bg-gray-100',
                        variant === 'success' && 'hover:bg-green-100',
                        variant === 'destructive' && 'hover:bg-red-100',
                    )}>
                    <X className='h-4 w-4' />
                </button>
            </div>
            <motion.div
                initial={{ width: '100%' }}
                animate={{ width: 0 }}
                transition={{ duration: 5 }}
                className={clsx(
                    'absolute bottom-0 left-0 h-1',
                    variant === 'default' && 'bg-sky-500',
                    variant === 'success' && 'bg-green-500',
                    variant === 'destructive' && 'bg-red-500',
                )}
            />
        </motion.div>
    )
}
