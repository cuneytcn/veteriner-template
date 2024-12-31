import type { Metadata } from 'next'
import { GalleryHero } from '@/sections/gallery/hero'
import { GalleryGrid } from '@/sections/gallery/grid'

export const metadata: Metadata = {
    title: 'Galeri | Kıymet Veteriner Kliniği',
    description:
        'Kliniğimizden kareler, tedavi ettiğimiz dostlarımız ve başarı hikayelerimiz. İzmir Bornova Atatürk Mahallesi veteriner kliniği galeri.',
    keywords:
        'veteriner galeri, pet fotoğrafları, veteriner kliniği, tedavi sonuçları, başarı hikayeleri, izmir veteriner, bornova veteriner',
}

export default function Page() {
    return (
        <main className='flex min-h-screen flex-col'>
            <GalleryHero />
            <GalleryGrid />
        </main>
    )
}
