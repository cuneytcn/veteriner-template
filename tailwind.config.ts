import type { Config } from 'tailwindcss'

export default {
    content: ['./src/*/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                default: ['Onest', 'system-ui'],
            },
        },
    },
    plugins: [],
} satisfies Config
