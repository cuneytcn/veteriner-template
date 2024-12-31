'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/button'
import Image from 'next/image'

export function HeroSection() {
    return (
        <section className='relative overflow-hidden bg-gray-50 py-32'>
            {/* Background Pattern */}
            <div className='absolute inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />

            <div className='container relative px-4'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid gap-16 lg:grid-cols-2 lg:gap-24'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='relative'>
                            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                                Pet Dostlarınızın Sağlığı İçin Yanınızdayız
                            </h1>
                            <p className='mt-6 text-lg text-gray-600'>
                                20 yıllık tecrübemiz ve uzman kadromuzla İzmir Bornova'da pet dostlarınıza 7/24
                                veteriner hizmeti sunuyoruz. Modern kliniğimiz ve gelişmiş teknolojik altyapımızla
                                kaliteli hizmet anlayışını benimsiyoruz.
                            </p>
                            <div className='mt-10 flex flex-wrap gap-4'>
                                <Button variant='lightBlue' size='lg' href='/randevu'>
                                    Randevu Al
                                </Button>
                                <Button variant='outline' size='lg' href='/hizmetlerimiz'>
                                    Hizmetlerimiz
                                </Button>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='mt-16 grid grid-cols-3 gap-8'>
                                <div>
                                    <p className='text-3xl font-bold text-gray-900'>20+</p>
                                    <p className='mt-2 text-sm text-gray-600'>Yıllık Tecrübe</p>
                                </div>
                                <div>
                                    <p className='text-3xl font-bold text-gray-900'>7/24</p>
                                    <p className='mt-2 text-sm text-gray-600'>Acil Hizmet</p>
                                </div>
                                <div>
                                    <p className='text-3xl font-bold text-gray-900'>10K+</p>
                                    <p className='mt-2 text-sm text-gray-600'>Mutlu Müşteri</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='relative lg:mt-0'>
                            <div className='aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 to-sky-50'>
                                <Image
                                    src='/images/hero/modern-clinic.jpg'
                                    alt='Modern Veteriner Kliniği'
                                    width={800}
                                    height={800}
                                    className='h-full w-full object-cover'
                                />
                            </div>

                            {/* Floating Card */}
                            <div className='absolute -right-8 bottom-16 rounded-2xl bg-white p-8 shadow-xl'>
                                <div className='flex items-center gap-4'>
                                    <div className='h-12 w-12 overflow-hidden rounded-full'>
                                        <Image
                                            src='/images/team/vet-1.jpg'
                                            alt='Dr. Ahmet Yılmaz'
                                            width={48}
                                            height={48}
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                    <div>
                                        <p className='font-semibold text-gray-900'>Dr. Ahmet Yılmaz</p>
                                        <p className='text-sm text-gray-600'>Baş Veteriner Hekim</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='flex items-center gap-1'>
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className='h-5 w-5 fill-yellow-400 text-yellow-400'
                                                viewBox='0 0 20 20'>
                                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className='mt-2 text-sm text-gray-600'>
                                        "Hayvan sevgisi ve mesleki tecrübemizle hizmetinizdeyiz."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
