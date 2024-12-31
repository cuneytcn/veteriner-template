'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

const variants = {
    lightBlue: 'bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700',
    outline: 'border border-gray-300 text-gray-700 hover:border-sky-500 hover:text-sky-500',
}

const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
}

type ButtonProps = {
    variant?: keyof typeof variants
    size?: keyof typeof sizes
    href?: string
} & (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>)

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = 'lightBlue', size = 'md', href, ...props }, ref) => {
        const classes = clsx(
            'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2',
            variants[variant],
            sizes[size],
            className,
        )

        if (href) {
            return (
                <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                    {props.children}
                </Link>
            )
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
                {props.children}
            </button>
        )
    },
)
