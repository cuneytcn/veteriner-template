'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

const team = [
    {
        name: 'Dr. Ahmet Yılmaz',
        role: 'Baş Veteriner Hekim',
        description: '15 yıllık tecrübesiyle pet dostlarınıza şefkat ve uzmanlıkla yaklaşıyor.',
        image: '/images/team/vet-1.jpg',
    },
    {
        name: 'Dr. Ayşe Demir',
        role: 'Veteriner Hekim',
        description: 'Cerrahi operasyonlarda uzmanlaşmış deneyimli veteriner hekim.',
        image: '/images/team/vet-2.jpg',
    },
    {
        name: 'Dr. Mehmet Kaya',
        role: 'Veteriner Hekim',
        description: 'Özellikle kedi ve köpek hastalıkları konusunda uzman hekim.',
        image: '/images/team/vet-3.jpg',
    },
]

export function TeamSection() {
    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Uzman Ekibimiz</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            Deneyimli veteriner hekimlerimizle pet dostlarınıza en iyi hizmeti sunuyoruz.
                        </p>
                    </motion.div>

                    <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative overflow-hidden rounded-2xl bg-gray-50'>
                                <div className='aspect-square'>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/0 to-gray-900/0'>
                                    <div className='absolute bottom-0 p-8'>
                                        <h3 className='text-xl font-bold text-white'>{member.name}</h3>
                                        <p className='mt-2 text-sky-200'>{member.role}</p>
                                        <p className='mt-4 text-gray-300'>{member.description}</p>
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
