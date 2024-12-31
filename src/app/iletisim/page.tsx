import type { Metadata } from 'next'
import { ContactHero } from '@/sections/contact/hero'
import { ContactForm } from '@/sections/contact/form'
import { ContactInfo } from '@/sections/contact/info'
import { ContactMap } from '@/sections/contact/map'

export const metadata: Metadata = {
    title: 'İletişim | Kıymet Veteriner Kliniği',
    description:
        "İzmir Bornova Atatürk Mahallesi'nde yer alan kliniğimize 7/24 ulaşabilirsiniz. Randevu ve bilgi için bize ulaşın.",
    keywords:
        'veteriner iletişim, veteriner randevu, veteriner adres, izmir veteriner, bornova veteriner, atatürk mahallesi veteriner',
}

export default function ContactPage() {
    return (
        <main className='flex min-h-screen flex-col'>
            <ContactHero />
            <section className='bg-white py-24'>
                <div className='container px-4'>
                    <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-12'>
                        <div className='lg:col-span-5'>
                            <ContactInfo />
                        </div>
                        <div className='lg:col-span-7'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <ContactMap />
        </main>
    )
}
