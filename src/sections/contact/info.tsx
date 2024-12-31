'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/button'
import { PhoneCall, MessageCircle, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const contactInfo = [
    {
        icon: PhoneCall,
        label: 'Telefon',
        value: '+90 232 XXX XX XX',
        href: 'tel:+902321234567',
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: '+90 5XX XXX XX XX',
        href: 'https://wa.me/905123456789',
    },
    {
        icon: Mail,
        label: 'E-posta',
        value: 'info@kiymetveteriner.com',
        href: 'mailto:info@kiymetveteriner.com',
    },
    {
        icon: MapPin,
        label: 'Adres',
        value: 'Atatürk Mahallesi, XXX Sokak, No: X/X, Bornova/İzmir',
        href: 'https://maps.google.com',
    },
]

const workingHours = [
    {
        days: 'Pazartesi - Cumartesi',
        hours: '09:00 - 19:00',
    },
    {
        days: 'Pazar',
        hours: '10:00 - 17:00',
    },
]

const socialLinks = [
    {
        icon: Facebook,
        href: 'https://facebook.com',
        label: 'Facebook',
    },
    {
        icon: Instagram,
        href: 'https://instagram.com',
        label: 'Instagram',
    },
    {
        icon: Twitter,
        href: 'https://twitter.com',
        label: 'Twitter',
    },
    {
        icon: Youtube,
        href: 'https://youtube.com',
        label: 'Youtube',
    },
]

export function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='space-y-8'>
            {/* Contact Details */}
            <div className='overflow-hidden rounded-2xl bg-white p-6 shadow-sm sm:p-8'>
                <h2 className='text-2xl font-bold text-gray-900'>İletişim Bilgileri</h2>
                <div className='mt-6 space-y-6'>
                    {contactInfo.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target={item.icon === MapPin ? '_blank' : undefined}
                            rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                            className='flex items-start gap-4'
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}>
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-500'>
                                <item.icon className='h-6 w-6' />
                            </div>
                            <div>
                                <div className='font-medium text-gray-900'>{item.label}</div>
                                <div className='mt-1 text-gray-600'>{item.value}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Working Hours */}
            <div className='overflow-hidden rounded-2xl bg-white p-6 shadow-sm sm:p-8'>
                <h2 className='flex items-center gap-2 text-2xl font-bold text-gray-900'>
                    <Clock className='h-6 w-6 text-sky-500' />
                    Çalışma Saatleri
                </h2>
                <div className='mt-6 space-y-4'>
                    {workingHours.map((item) => (
                        <div key={item.days} className='flex items-center justify-between'>
                            <div className='font-medium text-gray-900'>{item.days}</div>
                            <div className='text-gray-600'>{item.hours}</div>
                        </div>
                    ))}
                    <div className='rounded-lg bg-green-50 p-4 text-green-600'>
                        Acil durumlarda 7/24 hizmet vermekteyiz.
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className='overflow-hidden rounded-2xl bg-white p-6 shadow-sm sm:p-8'>
                <h2 className='text-2xl font-bold text-gray-900'>Sosyal Medya</h2>
                <div className='mt-6 flex flex-wrap gap-2'>
                    {socialLinks.map((item) => (
                        <Button
                            key={item.label}
                            variant='ghost'
                            size='icon'
                            onClick={() => window.open(item.href, '_blank')}>
                            <item.icon className='h-5 w-5' />
                        </Button>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
