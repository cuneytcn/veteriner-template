'use client'

import { motion } from 'motion/react'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const navigation = {
    main: [
        { name: 'Anasayfa', href: '/' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
        { name: 'Galeri', href: '/galeri' },
        { name: 'Blog', href: '/blog' },
        { name: 'İletişim', href: '/iletisim' },
    ],
    services: [
        { name: 'Aşılama', href: '/hizmetlerimiz#asilama' },
        { name: 'Muayene', href: '/hizmetlerimiz#muayene' },
        { name: 'Laboratuvar', href: '/hizmetlerimiz#laboratuvar' },
        { name: 'Cerrahi', href: '/hizmetlerimiz#cerrahi' },
        { name: 'Bakım', href: '/hizmetlerimiz#bakim' },
        { name: 'Acil', href: '/hizmetlerimiz#acil' },
    ],
    social: [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
        { name: 'Youtube', icon: Youtube, href: 'https://youtube.com' },
    ],
    contact: [
        {
            icon: Phone,
            content: '+90 (232) 123 45 67',
            href: 'tel:+902321234567',
        },
        {
            icon: Mail,
            content: 'info@kiymetveteriner.com',
            href: 'mailto:info@kiymetveteriner.com',
        },
        {
            icon: MapPin,
            content: 'Atatürk Mahallesi, 123. Sokak\nNo: 45/A, Bornova/İzmir',
            href: 'https://maps.google.com/?q=Atatürk+Mahallesi+Bornova+İzmir',
        },
    ],
}

export function Footer() {
    return (
        <footer className='bg-gray-900'>
            {/* Main Footer */}
            <div className='container px-4 py-16'>
                <div className='grid gap-12 lg:grid-cols-4'>
                    {/* Brand */}
                    <div className='space-y-6'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            <h3 className='text-2xl font-bold text-white'>Kıymet Veteriner</h3>
                            <p className='mt-2 text-gray-400'>
                                Pet dostlarınızın sağlığı için 20 yıldır hizmetinizdeyiz.
                            </p>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='flex gap-4'>
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='rounded-lg bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-sky-500 hover:text-white'>
                                    <item.icon className='h-5 w-5' />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <h3 className='text-lg font-semibold text-white'>Hızlı Erişim</h3>
                        <ul className='mt-6 space-y-4'>
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className='text-gray-400 transition-colors hover:text-sky-500'>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}>
                        <h3 className='text-lg font-semibold text-white'>Hizmetlerimiz</h3>
                        <ul className='mt-6 space-y-4'>
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className='text-gray-400 transition-colors hover:text-sky-500'>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        <h3 className='text-lg font-semibold text-white'>İletişim</h3>
                        <ul className='mt-6 space-y-4'>
                            {navigation.contact.map((item) => (
                                <li key={item.content}>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className='flex items-start gap-3 text-gray-400 transition-colors hover:text-sky-500'>
                                        <item.icon className='mt-1 h-5 w-5 flex-shrink-0' />
                                        <span className='whitespace-pre-line'>{item.content}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-gray-800 bg-gray-900/50'>
                <div className='container px-4 py-6'>
                    <div className='flex flex-col items-center justify-between gap-4 text-center sm:flex-row'>
                        <p className='text-sm text-gray-400'>
                            © {new Date().getFullYear()} Kıymet Veteriner Kliniği. Tüm hakları saklıdır.
                        </p>
                        <p className='text-sm text-gray-500'>
                            <a href='#' className='hover:text-sky-500'>
                                Gizlilik Politikası
                            </a>{' '}
                            ·{' '}
                            <a href='#' className='hover:text-sky-500'>
                                Kullanım Koşulları
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
