'use client'

import { motion } from 'motion/react'
import { Syringe, Stethoscope, Microscope, HeartPulse, Scissors, Clock, PawPrint, Pill } from 'lucide-react'

const services = [
    {
        icon: Stethoscope,
        title: 'Klinik Muayene',
        description:
            'Uzman veteriner hekimlerimiz tarafından kapsamlı muayene hizmeti. Düzenli kontroller ile pet dostlarınızın sağlığını koruyoruz.',
        features: ['Genel Muayene', 'Aşı Takibi', 'Sağlık Raporu', 'Beslenme Danışmanlığı'],
    },
    {
        icon: HeartPulse,
        title: 'Cerrahi Operasyonlar',
        description:
            'Modern ameliyathane ve ekipmanlarımızla güvenli cerrahi müdahaleler. Kısırlaştırma, ortopedi ve yumuşak doku cerrahisi.',
        features: ['Kısırlaştırma', 'Ortopedik Cerrahi', 'Diş Cerrahisi', 'Yumuşak Doku Cerrahisi'],
    },
    {
        icon: Syringe,
        title: 'Aşılama',
        description:
            'Düzenli aşılama programları ile pet dostlarınızı hastalıklardan koruyoruz. Aşı takip kartı ile zamanında müdahale.',
        features: ['Kuduz Aşısı', 'Karma Aşı', 'İç-Dış Parazit', 'Microchip'],
    },
    {
        icon: Microscope,
        title: 'Laboratuvar',
        description:
            'Tam donanımlı laboratuvarımızda kan, idrar ve dışkı tahlilleri. Hızlı ve güvenilir sonuçlar ile doğru teşhis.',
        features: ['Kan Tahlili', 'İdrar Tahlili', 'Dışkı Tahlili', 'Ultrason'],
    },
    {
        icon: PawPrint,
        title: 'Pet Bakım',
        description:
            'Pet dostlarınızın kişisel bakım ihtiyaçları için profesyonel hizmet. Tırnak kesimi, kulak temizliği ve daha fazlası.',
        features: ['Tırnak Kesimi', 'Kulak Temizliği', 'Tüy Bakımı', 'Diş Bakımı'],
    },
    {
        icon: Pill,
        title: 'İlaç Tedavisi',
        description: 'Reçete edilen ilaçların düzenli kullanımı ve takibi. İlaç dozaj ayarlaması ve yan etki kontrolü.',
        features: ['Reçete Düzenleme', 'Dozaj Takibi', 'Yan Etki İzleme', 'İlaç Temini'],
    },
    {
        icon: Scissors,
        title: 'Tüy Kesimi',
        description:
            'Profesyonel tüy kesimi ve şekillendirme hizmeti. Irka özgü kesim teknikleri ile pet dostlarınızın bakımı.',
        features: ['Irka Özgü Kesim', 'Yıkama', 'Fırçalama', 'Şekillendirme'],
    },
    {
        icon: Clock,
        title: 'Acil Servis',
        description: '7/24 acil veteriner hizmeti. Deneyimli ekibimiz ile acil durumlarda hızlı müdahale ve tedavi.',
        features: ['7/24 Hizmet', 'Hızlı Müdahale', 'Yoğun Bakım', 'Ambulans'],
    },
]

export function ServicesGrid() {
    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Veteriner Hizmetlerimiz</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            Pet dostlarınızın sağlığı ve mutluluğu için sunduğumuz kapsamlı hizmetlerimizi keşfedin.
                        </p>
                    </motion.div>

                    <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md'>
                                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-500'>
                                    <service.icon className='h-6 w-6' />
                                </div>
                                <h3 className='mt-4 text-xl font-bold text-gray-900'>{service.title}</h3>
                                <p className='mt-2 text-gray-600'>{service.description}</p>
                                <ul className='mt-4 space-y-2'>
                                    {service.features.map((feature) => (
                                        <li key={feature} className='flex items-center gap-2 text-sm text-gray-600'>
                                            <div className='h-1 w-1 rounded-full bg-sky-500' />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
