'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        content:
            'Çok ilgili ve profesyonel bir klinik. Dr. Ahmet Bey ve ekibi kedimizin tedavisi sürecinde bize çok yardımcı oldular. Kesinlikle tavsiye ediyorum.',
        author: 'Zeynep Y.',
        title: 'Kedi Sahibi',
    },
    {
        content:
            'Köpeğimizin acil ameliyatı için gece yarısı geldik. Hızlı ve başarılı müdahaleleriyle hayatını kurtardılar. 7/24 hizmet vermeleri çok güven verici.',
        author: 'Mehmet K.',
        title: 'Köpek Sahibi',
    },
    {
        content:
            'Kliniğin temizliği ve modern ekipmanları dikkat çekici. Veteriner hekimlerimiz çok ilgili ve sevecen. Pet dostlarımız için en doğru adres.',
        author: 'Ayşe D.',
        title: 'Kedi ve Köpek Sahibi',
    },
]

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className='bg-gray-50 py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-3xl text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='relative'>
                        <Quote className='mx-auto h-12 w-12 text-sky-200' />

                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className='mt-8'>
                            <blockquote>
                                <p className='text-xl text-gray-900 sm:text-2xl'>
                                    "{testimonials[currentIndex].content}"
                                </p>
                                <footer className='mt-8'>
                                    <div className='font-semibold text-gray-900'>
                                        {testimonials[currentIndex].author}
                                    </div>
                                    <div className='mt-1 text-sm text-gray-600'>{testimonials[currentIndex].title}</div>
                                </footer>
                            </blockquote>
                        </motion.div>

                        <div className='mt-8 flex justify-center gap-2'>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 w-2 rounded-full transition-colors ${
                                        index === currentIndex ? 'bg-sky-500' : 'bg-sky-200'
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
