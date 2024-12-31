'use client'

import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'

export function ContactMap() {
    return (
        <section className='bg-gray-50 py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-12 text-center'>
                        <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100'>
                            <MapPin className='h-8 w-8 text-sky-500' />
                        </div>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Konum</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            İzmir Bornova Atatürk Mahallesi'nde yer alan kliniğimize kolayca ulaşabilirsiniz.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='aspect-[16/9] overflow-hidden rounded-2xl bg-white shadow-sm'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12496.697039331826!2d27.214722!3d38.467722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97d12654f3c45%3A0x7b8c8f3c4d4b4f1a!2zQXRhdMO8cmsgTWFoYWxsZXNpLCAzNTEzMCBCb3Jub3ZhL8Swem1pcg!5e0!3m2!1str!2str!4v1624981234567!5m2!1str!2str'
                            width='100%'
                            height='100%'
                            style={{ border: 0 }}
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            title='Kıymet Veteriner Kliniği Konum'
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='mt-8 text-center text-sm text-gray-500'>
                        * Haritada gösterilen konum yaklaşık olarak belirtilmiştir. Detaylı yol tarifi için lütfen bizi
                        arayın.
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
