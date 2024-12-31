import type { Metadata } from 'next'
import { AboutHero } from '@/sections/about/hero'
import { AboutContent } from '@/sections/about/content'
import { AboutValues } from '@/sections/about/values'
import { AboutStats } from '@/sections/about/stats'
import { TeamSection } from '@/sections/home/team'

export const metadata: Metadata = {
    title: 'Hakkımızda | Kıymet Veteriner Kliniği',
    description:
        "İzmir Bornova'da 20 yıllık tecrübemizle pet dostlarınıza hizmet veriyoruz. Modern kliniğimiz ve uzman kadromuzla tanışın.",
    keywords: 'veteriner klinik, izmir veteriner, bornova veteriner, veteriner hekimlik, pet klinik',
}

export default function Page() {
    return (
        <main className='flex min-h-screen flex-col'>
            <AboutHero />
            <AboutContent />
            <AboutValues />
            <AboutStats />
            <TeamSection />
        </main>
    )
}
