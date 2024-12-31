import { Metadata } from 'next'
import { HeroSection } from '@/sections/home/hero'
import { ServicesSection } from '@/sections/home/services'
import { AboutSection } from '@/sections/home/about'
import { TeamSection } from '@/sections/home/team'
import { TestimonialsSection } from '@/sections/home/testimonials'
import { BlogSection } from '@/sections/home/blog'
import { ContactSection } from '@/sections/home/contact'

export const metadata: Metadata = {
    title: 'Kıymet Veteriner Kliniği | İzmir Bornova Veteriner',
    description:
        "İzmir Bornova'da 20 yıllık tecrübemizle pet dostlarınız için profesyonel veteriner hizmetleri. Atatürk Mahallesi'nde aşılama, cerrahi operasyonlar, check-up ve daha fazlası.",
    keywords:
        'veteriner, klinik, pet, hayvan hastanesi, aşı, cerrahi, izmir veteriner, bornova veteriner, atatürk mahallesi veteriner',
    openGraph: {
        title: 'Kıymet Veteriner Kliniği | İzmir Bornova Veteriner',
        description:
            "İzmir Bornova'da 20 yıllık tecrübemizle pet dostlarınız için profesyonel veteriner hizmetleri. Atatürk Mahallesi'nde aşılama, cerrahi operasyonlar, check-up ve daha fazlası.",
        url: 'https://www.kiymetveteriner.com',
        siteName: 'Kıymet Veteriner Kliniği',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Kıymet Veteriner Kliniği',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
}

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <TeamSection />
            <TestimonialsSection />
            <BlogSection />
            <ContactSection />
        </main>
    )
}
