'use client'

import { motion } from 'motion/react'
import { Stethoscope } from 'lucide-react'
import Image from 'next/image'

export function ServicesHero() {
    return (
        <section className='relative min-h-[40vh] bg-gray-50'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='h-full w-full'>
                    <Image
                        src='/images/services/general-exam.jpg'
                        alt='Veteriner Muayene'
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-gray-50' />
            </div>

            <div className='container relative flex min-h-[40vh] flex-col items-center justify-center px-4'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100'>
                    <Stethoscope className='h-10 w-10 text-sky-500' />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-center text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl'>
                    Hizmetlerimiz
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='mt-6 max-w-3xl text-center text-lg text-gray-600 sm:text-xl'>
                    Pet dostlarınız için kapsamlı veteriner hizmetleri sunuyoruz. Klinik ve cerrahi müdahaleler,
                    aşılama, check-up ve daha fazlası.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600'>
                    <span className='flex items-center gap-2'>
                        <div className='h-1 w-1 rounded-full bg-sky-500' />
                        Klinik Hizmetler
                    </span>
                    <span className='flex items-center gap-2'>
                        <div className='h-1 w-1 rounded-full bg-sky-500' />
                        Cerrahi Müdahaleler
                    </span>
                    <span className='flex items-center gap-2'>
                        <div className='h-1 w-1 rounded-full bg-sky-500' />
                        Aşılama
                    </span>
                    <span className='flex items-center gap-2'>
                        <div className='h-1 w-1 rounded-full bg-sky-500' />
                        Check-up
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
