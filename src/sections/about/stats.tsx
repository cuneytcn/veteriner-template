'use client'

import { motion } from 'motion/react'

const stats = [
    {
        value: '20+',
        label: 'Yıllık Deneyim',
    },
    {
        value: '10.000+',
        label: 'Mutlu Hasta',
    },
    {
        value: '7/24',
        label: 'Hizmet',
    },
    {
        value: '100%',
        label: 'Müşteri Memnuniyeti',
    },
]

export function AboutStats() {
    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid gap-8 rounded-3xl bg-gradient-to-br from-sky-500 to-sky-600 px-6 py-12 sm:px-12 lg:grid-cols-4 lg:px-24'>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='text-center'>
                                <div className='text-4xl font-bold text-white sm:text-5xl'>{stat.value}</div>
                                <div className='mt-2 text-lg text-sky-100'>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
