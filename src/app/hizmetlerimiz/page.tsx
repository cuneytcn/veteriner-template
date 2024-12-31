import type { Metadata } from 'next'
import { ServicesHero } from '@/sections/services/hero'
import { ServicesGrid } from '@/sections/services/grid'
import { ServicesPricing } from '@/sections/services/pricing'
import { ServicesFaq } from '@/sections/services/faq'

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | Kiymet Veteriner Klinigi',
    description:
        'Klinik ve cerrahi müdahaleler, aşılama, check-up, mikroçip, tırnak kesimi ve daha fazlası. Pet dostlarınız için kapsamlı veteriner hizmetleri.',
    keywords:
        'veteriner hizmetleri, veteriner aşı, veteriner cerrahi, veteriner check-up, veteriner mikroçip, veteriner tırnak kesimi',
}

export default function ServicesPage() {
    return (
        <main className='flex min-h-screen flex-col'>
            <ServicesHero />
            <ServicesGrid />
            <ServicesPricing />
            <ServicesFaq />
        </main>
    )
}
