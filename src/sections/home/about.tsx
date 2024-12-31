'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/button'
import { Clock, Heart, Shield, Users } from 'lucide-react'
import Image from 'next/image'

const features = [
    {
        icon: Clock,
        title: '7/24 Hizmet',
        description: 'Acil durumlar için 7 gün 24 saat hizmetinizdeyiz.',
    },
    {
        icon: Heart,
        title: 'Sevgi & İlgi',
        description: 'Pet dostlarınıza sevgi ve özenle yaklaşıyoruz.',
    },
    {
        icon: Shield,
        title: 'Güvenilir Hizmet',
        description: '20 yıllık tecrübemizle güvenilir hizmet sunuyoruz.',
    },
    {
        icon: Users,
        title: 'Uzman Ekip',
        description: 'Deneyimli ve profesyonel veteriner hekimlerimiz.',
    },
]

export function AboutSection() {
    return (
        <section className='bg-gray-50 py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid gap-16 lg:grid-cols-2 lg:gap-24'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='relative lg:order-last'>
                            <div className='aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 to-sky-50'>
                                <Image
                                    src='/images/about/clinic-interior.jpg'
                                    alt='Modern Veteriner Kliniği İç Mekan'
                                    width={800}
                                    height={800}
                                    className='h-full w-full object-cover'
                                />
                            </div>

                            {/* Floating Card */}
                            <div className='absolute -left-8 bottom-16 rounded-2xl bg-white p-8 shadow-xl'>
                                <div className='flex items-center gap-4'>
                                    <div className='flex h-16 w-16 items-center justify-center rounded-xl bg-sky-500 text-white'>
                                        <span className='text-2xl font-bold'>20</span>
                                    </div>
                                    <div>
                                        <p className='text-lg font-semibold text-gray-900'>Yıllık Tecrübe</p>
                                        <p className='text-sm text-gray-600'>İzmir Bornova'da</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='relative'>
                            <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                                Modern Veteriner Kliniği
                                <br />
                                <span className='text-sky-500'>Profesyonel Hizmet</span>
                            </h2>
                            <p className='mt-6 text-lg text-gray-600'>
                                İzmir Bornova'da 20 yıllık tecrübemizle pet dostlarınıza en iyi hizmeti sunmak için
                                çalışıyoruz. Modern kliniğimiz, gelişmiş teknolojik altyapımız ve uzman kadromuzla
                                yanınızdayız.
                            </p>

                            <div className='mt-12 grid gap-8 sm:grid-cols-2'>
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}>
                                        <div className='inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-500'>
                                            <feature.icon className='h-6 w-6' />
                                        </div>
                                        <h3 className='mt-4 text-lg font-semibold text-gray-900'>{feature.title}</h3>
                                        <p className='mt-2 text-gray-600'>{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className='mt-12'>
                                <Button variant='lightBlue' size='lg' href='/hakkimizda'>
                                    Hakkımızda
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
