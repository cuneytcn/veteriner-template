'use client'

import { motion } from 'motion/react'
import { Heart, Shield, Clock, Users, Stethoscope, Sparkles } from 'lucide-react'

const values = [
    {
        icon: Heart,
        title: 'Sevgi & Şefkat',
        description: 'Her hastamıza kendi evcil hayvanımız gibi sevgi ve şefkatle yaklaşıyoruz.',
    },
    {
        icon: Shield,
        title: 'Güvenilirlik',
        description: 'Şeffaf ve dürüst hizmet anlayışıyla güveninizi kazanıyoruz.',
    },
    {
        icon: Clock,
        title: '7/24 Hizmet',
        description: 'Acil durumlar için her zaman hazır ve ulaşılabilir durumdayız.',
    },
    {
        icon: Users,
        title: 'Aile Yaklaşımı',
        description: 'Siz ve pet dostlarınızı ailemizin bir parçası olarak görüyoruz.',
    },
    {
        icon: Stethoscope,
        title: 'Profesyonellik',
        description: 'Uzman kadromuzla profesyonel veteriner hekimlik hizmeti sunuyoruz.',
    },
    {
        icon: Sparkles,
        title: 'Modern Teknoloji',
        description: 'En son teknoloji cihazlarla donatılmış modern kliniğimizde hizmet veriyoruz.',
    },
]

export function AboutValues() {
    return (
        <section className='bg-gray-50 py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-2xl text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                        Değerlerimiz
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='mt-4 text-lg text-gray-600'>
                        Pet dostlarınıza hizmet verirken bizi özel kılan değerlerimiz
                    </motion.p>
                </div>

                <div className='mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md'>
                            <div className='relative z-10'>
                                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white'>
                                    <value.icon className='h-6 w-6' />
                                </div>
                                <h3 className='mt-6 text-xl font-semibold text-gray-900'>{value.title}</h3>
                                <p className='mt-2 text-gray-600'>{value.description}</p>
                            </div>
                            <div className='absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-sky-50 transition-all group-hover:scale-150' />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
