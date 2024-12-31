'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

const faqs = [
    {
        question: 'Hangi hayvanlar için veteriner hizmeti veriyorsunuz?',
        answer: 'Kliniğimizde kedi, köpek, kuş ve küçük memeli hayvanlar (hamster, tavşan vb.) için veteriner hizmeti sunuyoruz. Her tür için uzmanlaşmış veteriner hekimlerimiz bulunmaktadır.',
    },
    {
        question: 'Acil durumlarda nasıl ulaşabilirim?',
        answer: '7/24 acil veteriner hizmeti sunuyoruz. Acil durumlarda kliniğimizin telefon numarasını arayabilir veya WhatsApp hattımızdan bize ulaşabilirsiniz. Gerekli durumlarda ambulans hizmeti de sağlıyoruz.',
    },
    {
        question: 'Aşı takvimine nasıl karar veriliyor?',
        answer: 'Aşı takvimi, pet dostunuzun yaşı, ırkı, yaşam koşulları ve sağlık durumu göz önünde bulundurularak bireysel olarak planlanır. İlk muayenede detaylı bir aşı programı oluşturulur.',
    },
    {
        question: 'Randevu almadan gelebilir miyim?',
        answer: 'Kaliteli hizmet verebilmek için randevu sistemine göre çalışıyoruz. Acil durumlar dışında randevu almanızı öneriyoruz. Randevu için telefon, WhatsApp veya web sitemiz üzerinden bize ulaşabilirsiniz.',
    },
    {
        question: 'Ameliyat sonrası bakım hizmeti veriyor musunuz?',
        answer: 'Evet, tüm cerrahi operasyonlar sonrasında detaylı bakım ve takip hizmeti sunuyoruz. Post-operatif dönemde pet dostunuzun durumuna göre yatılı bakım veya evde bakım seçenekleri değerlendirilir.',
    },
    {
        question: 'Mikroçip uygulaması zorunlu mu?',
        answer: 'Evet, 5199 sayılı Hayvanları Koruma Kanunu gereğince kedi, köpek ve gelinciklere mikroçip takılması zorunludur. Kliniğimizde mikroçip uygulaması ve kayıt işlemlerini gerçekleştiriyoruz.',
    },
    {
        question: 'Evde veteriner hizmeti veriyor musunuz?',
        answer: 'Evet, belirli durumlarda evde veteriner hizmeti sunuyoruz. Özellikle yaşlı veya hareket kısıtlılığı olan pet dostlarımız için bu hizmeti tercih edebilirsiniz.',
    },
    {
        question: 'Ödeme seçenekleriniz nelerdir?',
        answer: 'Nakit, kredi kartı ve banka kartı ile ödeme kabul ediyoruz. Ayrıca belirli tutarlar için taksit seçeneklerimiz mevcuttur. Bakım paketlerimizde peşin ödemelerde indirim uyguluyoruz.',
    },
]

export function ServicesFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-3xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Sıkça Sorulan Sorular</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            Veteriner hizmetlerimiz hakkında merak edilen soruları ve cevaplarını inceleyin.
                        </p>
                    </motion.div>

                    <div className='mt-16 space-y-4'>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className='flex w-full items-center justify-between rounded-lg bg-gray-50 p-6 text-left transition-colors hover:bg-gray-100'>
                                    <span className='text-lg font-medium text-gray-900'>{faq.question}</span>
                                    <ChevronDown
                                        className={clsx(
                                            'h-5 w-5 text-gray-500 transition-transform',
                                            openIndex === index && 'rotate-180',
                                        )}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className='overflow-hidden'>
                                            <div className='px-6 py-4 text-gray-600'>{faq.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='mt-12 text-center text-gray-600'>
                        Başka sorularınız varsa bize ulaşmaktan çekinmeyin.
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
