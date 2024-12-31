'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

interface DropdownProps {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
}

export function Dropdown({ trigger, children, className }: DropdownProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isOpen])

    return (
        <div ref={dropdownRef} className={clsx('relative', className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center gap-1 text-gray-700 transition-colors hover:text-teal-600'>
                {trigger}
                <ChevronDown className={clsx('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className='absolute left-0 top-full mt-2 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg'>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Dropdown
