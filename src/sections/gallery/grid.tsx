'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

const gallery = [
    {
        title: 'Kedi Muayenesi',
        description: 'Düzenli sağlık kontrolleri ile pet dostlarımızın sağlığını koruyoruz',
        image: '/images/gallery/cat-checkup.jpg',
        category: 'Muayene',
    },
    {
        title: 'Köpek Muayenesi',
        description: 'Uzman veteriner hekimlerimizle detaylı muayene ve tedavi',
        image: '/images/gallery/dog-exam.jpg',
        category: 'Muayene',
    },
    {
        title: 'Mutlu Pet Sahibi',
        description: 'Pet dostlarımızın sağlığı ve mutluluğu bizim önceliğimiz',
        image: '/images/gallery/happy-owner.jpg',
        category: 'Mutlu Müşteriler',
    },
]

export function GalleryGrid() {
    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Galeri</h2>
                        <p className='mt-4 text-lg text-gray-600'>Kliniğimizden kareler ve mutlu dostlarımız</p>
                    </motion.div>

                    <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                        {gallery.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative overflow-hidden rounded-2xl bg-gray-50'>
                                <div className='aspect-square'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={600}
                                        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                    />
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/0 to-gray-900/0'>
                                    <div className='absolute bottom-0 p-8'>
                                        <div className='mb-4'>
                                            <span className='inline-flex items-center rounded-full bg-sky-500 px-2.5 py-0.5 text-xs font-medium text-white'>
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className='text-xl font-bold text-white'>{item.title}</h3>
                                        <p className='mt-2 text-gray-300'>{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
