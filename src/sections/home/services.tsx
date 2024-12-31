'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/button'
import { Syringe, Stethoscope, Microscope, Scissors, Hotel, HeartPulse, PawPrint } from 'lucide-react'

const services = [
    {
        icon: Syringe,
        title: 'Aşılama',
        description: 'Düzenli aşılama programları ile pet dostlarınızı hastalıklardan koruyoruz.',
    },
    {
        icon: Stethoscope,
        title: 'Genel Muayene',
        description: 'Kapsamlı sağlık kontrolleri ve check-up hizmetleri sunuyoruz.',
    },
    {
        icon: Microscope,
        title: 'Laboratuvar',
        description: 'Modern laboratuvarımızda detaylı tetkik ve tahlil hizmetleri.',
    },
    {
        icon: Scissors,
        title: 'Cerrahi Operasyonlar',
        description: 'Deneyimli ekibimizle güvenli cerrahi müdahaleler gerçekleştiriyoruz.',
    },
    {
        icon: Hotel,
        title: 'Pet Hotel',
        description: 'Seyahatlerinizde pet dostlarınız için konforlu konaklama imkanı.',
    },
    {
        icon: HeartPulse,
        title: 'Acil Servis',
        description: '7/24 acil veteriner hizmeti ile her zaman yanınızdayız.',
    },
    {
        icon: Stethoscope,
        title: 'Diş Tedavisi',
        description: 'Diş ve diş eti hastalıklarının tedavisi ve koruyucu bakım.',
    },
    {
        icon: PawPrint,
        title: 'Tırnak Kesimi',
        description: 'Profesyonel tırnak kesimi ve tırnak bakımı hizmetleri.',
    },
]

export function ServicesSection() {
    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Hizmetlerimiz</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            Modern kliniğimizde pet dostlarınız için sunduğumuz kapsamlı hizmetler
                        </p>
                    </motion.div>

                    <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative overflow-hidden rounded-2xl bg-gray-50 p-8'>
                                <div className='relative z-10'>
                                    <div className='mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white'>
                                        <service.icon className='h-6 w-6' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-gray-900'>{service.title}</h3>
                                    <p className='mt-2 text-gray-600'>{service.description}</p>
                                </div>
                                <div className='absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-50 transition-all group-hover:bg-sky-100' />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='mt-16 text-center'>
                        <Button variant='lightBlue' size='lg' href='/hizmetlerimiz'>
                            Tüm Hizmetlerimiz
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
