'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Toast, type ToastProps } from './toast'

type ToastType = ToastProps & { id: string }

interface ToastContextType {
    toasts: ToastType[]
    addToast: (toast: Omit<ToastType, 'id'>) => void
    removeToast: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = React.useState<ToastType[]>([])

    const addToast = React.useCallback((toast: Omit<ToastType, 'id'>) => {
        const id = Math.random().toString(36).slice(2)
        setToasts((prev) => [...prev, { ...toast, id }])

        // Auto remove after 5 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id))
        }, 5000)
    }, [])

    const removeToast = React.useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <div className='fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4'>
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    )
}

export function useToast() {
    const context = React.useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}
