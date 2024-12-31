'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactSection() {
    return (
        <section className='bg-gray-50 py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>İletişim</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            Pet dostlarınızın sağlığı için 7/24 hizmetinizdeyiz
                        </p>
                    </motion.div>

                    <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm'>
                            <Phone className='h-8 w-8 text-sky-500' />
                            <h3 className='mt-4 font-semibold text-gray-900'>Telefon</h3>
                            <p className='mt-2 text-gray-600'>
                                <a href='tel:+902321234567' className='hover:text-sky-500'>
                                    0232 123 45 67
                                </a>
                            </p>
                            <p className='mt-1 text-gray-600'>
                                <a href='tel:+905301234567' className='hover:text-sky-500'>
                                    0530 123 45 67
                                </a>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm'>
                            <Mail className='h-8 w-8 text-sky-500' />
                            <h3 className='mt-4 font-semibold text-gray-900'>E-posta</h3>
                            <p className='mt-2 text-gray-600'>
                                <a href='mailto:info@veteriner.com' className='hover:text-sky-500'>
                                    info@veteriner.com
                                </a>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm'>
                            <MapPin className='h-8 w-8 text-sky-500' />
                            <h3 className='mt-4 font-semibold text-gray-900'>Adres</h3>
                            <p className='mt-2 text-gray-600'>
                                Atatürk Mahallesi, 123. Sokak No: 45/A
                                <br />
                                Bornova, İzmir
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm'>
                            <Clock className='h-8 w-8 text-sky-500' />
                            <h3 className='mt-4 font-semibold text-gray-900'>Çalışma Saatleri</h3>
                            <p className='mt-2 text-gray-600'>
                                Hafta içi: 09:00 - 19:00
                                <br />
                                Hafta sonu: 10:00 - 17:00
                            </p>
                            <p className='mt-2 text-sm text-sky-500'>7/24 Acil Hizmet</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='mt-16 text-center'>
                        <Button variant='lightBlue' size='lg' href='/iletisim'>
                            İletişime Geç
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
