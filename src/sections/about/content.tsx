'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/button'

export function AboutContent() {
    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='grid gap-12 lg:grid-cols-2 lg:gap-24'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='relative'>
                        <div className='aspect-square overflow-hidden rounded-2xl'>
                            {/* Bu kısma klinik fotoğrafı gelecek */}
                            <div className='h-full w-full bg-gradient-to-br from-sky-100 to-sky-50' />
                        </div>
                        <div className='absolute -bottom-6 -right-6 -z-10 aspect-square w-full rounded-2xl bg-sky-100/50' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col justify-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                            Modern Ekipmanlar
                            <span className='mt-2 block text-sky-500'>Uzman Kadro</span>
                        </h2>
                        <p className='mt-6 text-lg text-gray-600'>
                            2003 yılından bu yana İzmir Bornova'da hizmet veren kliniğimiz, modern ekipmanları ve uzman
                            kadrosuyla pet dostlarınızın sağlığı için çalışıyor. Atatürk Mahallesi'ndeki kliniğimizde,
                            son teknoloji cihazlarımız ve deneyimli ekibimizle en iyi veteriner hekimlik hizmetini
                            sunuyoruz.
                        </p>

                        <p className='mt-6 text-lg text-gray-600'>
                            Amacımız sadece tedavi değil, aynı zamanda koruyucu hekimlik hizmetleriyle pet dostlarınızın
                            sağlıklı bir yaşam sürmesini sağlamak. Düzenli kontroller, aşılama programları ve beslenme
                            danışmanlığı ile onların yaşam kalitesini artırıyoruz.
                        </p>

                        <div className='mt-10'>
                            <Button variant='lightBlue' size='lg'>
                                Randevu Al
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
