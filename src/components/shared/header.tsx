'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/button'
import { ChevronDown, Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

const navigation = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    {
        name: 'Hizmetlerimiz',
        href: '/hizmetlerimiz',
        children: [
            { name: 'Aşılama', href: '/hizmetlerimiz#asilama' },
            { name: 'Genel Muayene', href: '/hizmetlerimiz#genel-muayene' },
            { name: 'Laboratuvar', href: '/hizmetlerimiz#laboratuvar' },
            { name: 'Cerrahi Operasyonlar', href: '/hizmetlerimiz#cerrahi-operasyonlar' },
            { name: 'Pet Hotel', href: '/hizmetlerimiz#pet-hotel' },
            { name: 'Acil Servis', href: '/hizmetlerimiz#acil-servis' },
            { name: 'Diş Tedavisi', href: '/hizmetlerimiz#dis-tedavisi' },
            { name: 'Tırnak Kesimi', href: '/hizmetlerimiz#tirnak-kesimi' },
        ],
    },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [expandedItem, setExpandedItem] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Sayfa değiştiğinde mobil menüyü kapat
        setIsMobileMenuOpen(false)
        setExpandedItem(null)
    }, [pathname])

    return (
        <header
            className={clsx(
                'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
                isScrolled ?
                    'border-gray-200 bg-white/80 backdrop-blur-md'
                :   'border-transparent bg-gradient-to-b from-white/50 to-white/0 backdrop-blur-sm',
            )}>
            <div className='mx-auto max-w-[2000px] px-4 xl:px-10'>
                <nav className='flex h-24 items-center justify-between'>
                    <Link href='/' className='group relative transition-all duration-200 hover:-translate-y-0.5'>
                        <span className='text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-sky-500'>
                            Kıymet Veteriner Klinigi
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden items-center gap-12 lg:flex'>
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className='group relative'
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}>
                                {item.children ?
                                    <>
                                        <Link
                                            href={item.href}
                                            className={clsx(
                                                'group relative flex items-center gap-2 text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5',
                                                pathname === item.href ?
                                                    'text-sky-500'
                                                :   'text-gray-600 hover:text-sky-500',
                                            )}>
                                            <span className='relative'>
                                                {item.name}
                                                <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-200 group-hover:w-full' />
                                            </span>
                                            <ChevronDown
                                                className={clsx(
                                                    'h-4 w-4 transition-transform duration-200',
                                                    hoveredItem === item.name && 'rotate-180',
                                                )}
                                            />
                                        </Link>
                                        <div
                                            className={clsx(
                                                'absolute right-0 mt-2 w-64 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5 transition-all duration-200',
                                                hoveredItem === item.name ?
                                                    'visible translate-y-0 opacity-100'
                                                :   'invisible -translate-y-2 opacity-0',
                                            )}>
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className='block rounded-xl px-4 py-3 text-[15px] font-medium text-gray-600 transition-all duration-200 hover:-translate-x-0.5 hover:bg-sky-50 hover:text-sky-500'>
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                :   <Link
                                        href={item.href}
                                        className={clsx(
                                            'group relative text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5',
                                            pathname === item.href ?
                                                'text-sky-500'
                                            :   'text-gray-600 hover:text-sky-500',
                                        )}>
                                        <span className='relative'>
                                            {item.name}
                                            <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-200 group-hover:w-full' />
                                        </span>
                                    </Link>
                                }
                            </div>
                        ))}

                        <Button
                            variant='lightBlue'
                            href='/iletisim'
                            className='rounded-xl px-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-sky-200 hover:ring-offset-2'>
                            Randevu Al
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='rounded-xl p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden'>
                        {isMobileMenuOpen ?
                            <X className='h-6 w-6' />
                        :   <Menu className='h-6 w-6' />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className='fixed inset-x-0 top-20 z-50 overflow-hidden bg-white shadow-lg lg:hidden'>
                        <div className='container divide-y divide-gray-100'>
                            {navigation.map((item) => (
                                <div key={item.name} className='py-2'>
                                    {item.children ?
                                        <div>
                                            <button
                                                onClick={() =>
                                                    setExpandedItem(expandedItem === item.name ? null : item.name)
                                                }
                                                className={clsx(
                                                    'flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium transition-colors',
                                                    pathname === item.href ? 'text-sky-500' : 'text-gray-900',
                                                )}>
                                                {item.name}
                                                <ChevronDown
                                                    className={clsx(
                                                        'h-4 w-4 transition-transform',
                                                        expandedItem === item.name && 'rotate-180',
                                                    )}
                                                />
                                            </button>
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: expandedItem === item.name ? 'auto' : 0,
                                                }}
                                                transition={{ duration: 0.2 }}
                                                className='overflow-hidden bg-gray-50'>
                                                <div className='space-y-1 px-4 py-2'>
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className='block rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-sky-500'>
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    :   <Link
                                            href={item.href}
                                            className={clsx(
                                                'block px-4 py-2 text-sm font-medium transition-colors',
                                                pathname === item.href ? 'text-sky-500' : 'text-gray-900',
                                            )}>
                                            {item.name}
                                        </Link>
                                    }
                                </div>
                            ))}
                            <div className='p-4'>
                                <Button variant='lightBlue' href='/iletisim' className='w-full justify-center'>
                                    Randevu Al
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
