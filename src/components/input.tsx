'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { motion, type HTMLMotionProps } from 'motion/react'

const inputVariants = cva(
    'flex w-full bg-transparent px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'border border-gray-200 rounded-md focus-visible:border-gray-900 focus-visible:ring-gray-400',
                destructive: 'border border-red-500 rounded-md focus-visible:border-red-600 focus-visible:ring-red-400',
                outline:
                    'border border-gray-200 rounded-md bg-transparent focus-visible:border-gray-900 focus-visible:ring-gray-400',
                secondary:
                    'border border-gray-100 rounded-md bg-gray-100 focus-visible:border-gray-200 focus-visible:ring-gray-400',
                ghost: 'border-none rounded-md focus-visible:ring-gray-400 hover:bg-gray-100 ',
                turquoise:
                    'border border-teal-500 rounded-md focus-visible:border-teal-600 focus-visible:ring-teal-400',
                lightBlue: 'border border-sky-500 rounded-md focus-visible:border-sky-600 focus-visible:ring-sky-400',
            },
            size: {
                default: 'h-10',
                sm: 'h-8 text-xs',
                lg: 'h-12 text-base',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

export interface InputProps extends Omit<HTMLMotionProps<'input'>, 'size'>, VariantProps<typeof inputVariants> {
    className?: string
    error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, size, type, error, ...props }, ref) => {
        return (
            <div className='relative w-full'>
                <motion.input
                    type={type}
                    className={clsx(
                        inputVariants({ variant: error ? 'destructive' : variant, size, className }),
                        'w-full',
                    )}
                    ref={ref}
                    whileFocus={{ scale: 1.01 }}
                    aria-invalid={!!error}
                    {...props}
                />
                {error && (
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='absolute -bottom-5 left-0 mt-1 text-xs text-red-500'>
                        {error}
                    </motion.span>
                )}
            </div>
        )
    },
)

Input.displayName = 'Input'

export { Input, inputVariants }
