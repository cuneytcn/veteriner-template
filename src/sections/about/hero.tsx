'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function AboutHero() {
    return (
        <section className='relative min-h-[60vh] bg-gray-50'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='h-full w-full'>
                    <Image
                        src='/images/about/clinic-interior.jpg'
                        alt='Modern Veteriner Kliniği İç Mekan'
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-gray-50' />
            </div>

            <div className='container relative flex min-h-[60vh] items-center px-4'>
                <div className='mx-auto max-w-3xl text-center'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl'>
                        20 Yıllık Tecrübe
                        <span className='mt-2 block text-sky-500'>Sonsuz Sevgi</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='mt-6 text-lg text-gray-600 sm:text-xl'>
                        İzmir Bornova'da modern kliniğimiz ve uzman kadromuzla pet dostlarınıza en iyi bakımı sunuyoruz.
                        Sevgi ve tecrübeyle...
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
