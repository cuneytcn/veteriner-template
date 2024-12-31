'use client'

import { motion } from 'motion/react'
import { Heart, Clock, Shield, Users, Star, Microscope, Phone, Award } from 'lucide-react'

const features = [
    {
        icon: Heart,
        title: 'Sevgi ve İlgi',
        description: 'Pet dostlariniza aile üyemiz gibi yaklasiyor, onlara özel ilgi ve sevgi gösteriyoruz.',
    },
    {
        icon: Clock,
        title: '7/24 Hizmet',
        description: 'Acil durumlar icin 7 gün 24 saat kesintisiz veteriner hekimlik hizmeti sunuyoruz.',
    },
    {
        icon: Shield,
        title: '20 Yillik Tecrübe',
        description: "Izmir Bornova'da 20 yillik tecrübemizle güvenilir veteriner hekimlik hizmeti veriyoruz.",
    },
    {
        icon: Users,
        title: 'Uzman Kadro',
        description: 'Alaninda uzman veteriner hekimlerimiz ve deneyimli saglik ekibimizle hizmetinizdeyiz.',
    },
    {
        icon: Star,
        title: 'Modern Ekipman',
        description: 'En son teknoloji cihazlar ve modern ekipmanlarla kaliteli hizmet sunuyoruz.',
    },
    {
        icon: Microscope,
        title: 'Tam Donanımli Laboratuvar',
        description: 'Kendi bünyemizde tam donanimli laboratuvarimizla hizli ve güvenilir sonuclar.',
    },
    {
        icon: Phone,
        title: 'Kolay Ulasim',
        description: 'Merkezi konumumuz ve ücretsiz park alanimizla kolay ulasim imkani sagliyoruz.',
    },
    {
        icon: Award,
        title: 'Kaliteli Hizmet',
        description: 'Yüksek hasta memnuniyeti ve kaliteli hizmet anlayisiyla calisiyoruz.',
    },
]

export function ServicesPricing() {
    return (
        <section className='bg-gray-50 py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Neden Bizi Secmelisiniz?</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            Pet dostlarinizin sagligi icin en iyi hizmeti sunmak önceliğimiz
                        </p>
                    </motion.div>

                    <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md'>
                                <div className='relative z-10'>
                                    <div className='mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white'>
                                        <feature.icon className='h-6 w-6' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-gray-900'>{feature.title}</h3>
                                    <p className='mt-2 text-gray-600'>{feature.description}</p>
                                </div>
                                <div className='absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-50 transition-all group-hover:bg-sky-100' />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
