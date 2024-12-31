'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Tag } from 'lucide-react'

const categories = [
    { name: 'Sağlık', count: 12 },
    { name: 'Bakım', count: 8 },
    { name: 'Eğitim', count: 6 },
    { name: 'Beslenme', count: 9 },
    { name: 'Davranış', count: 5 },
    { name: 'Hastalıklar', count: 7 },
]

const popularPosts = [
    {
        slug: 'kedilerde-asi-takvimi',
        title: 'Kedilerde Aşı Takvimi: Hangi Aşılar, Ne Zaman Yapılmalı?',
        image: '/images/blog/cat-vaccine.jpg',
        date: '15 Mart 2024',
    },
    {
        slug: 'kopeklerde-beslenme',
        title: 'Köpeklerde Doğru Beslenme: Nelere Dikkat Edilmeli?',
        image: '/images/blog/dog-nutrition.jpg',
        date: '12 Mart 2024',
    },
    {
        slug: 'yavru-kedi-bakimi',
        title: 'Yavru Kedi Bakımında İlk 3 Ay: Temel Bilgiler',
        image: '/images/blog/kitten-care.jpg',
        date: '10 Mart 2024',
    },
]

const tags = ['Kedi', 'Köpek', 'Aşı', 'Beslenme', 'Bakım', 'Eğitim', 'Sağlık', 'İlk Yardım', 'Davranış', 'Hastalık']

export function BlogSidebar() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className='space-y-8'>
            {/* Search */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='rounded-2xl bg-white p-6 shadow-sm'>
                <div className='relative'>
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Blog yazılarında ara...'
                        className='w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 text-gray-600 placeholder-gray-400 focus:border-sky-500 focus:outline-none'
                    />
                    <Search className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
                </div>
            </motion.div>

            {/* Categories */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='rounded-2xl bg-white p-6 shadow-sm'>
                <h3 className='text-lg font-semibold text-gray-900'>Kategoriler</h3>
                <div className='mt-4 space-y-2'>
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={`/blog/kategori/${category.name.toLowerCase()}`}
                            className='flex items-center justify-between rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-sky-50 hover:text-sky-500'>
                            <span>{category.name}</span>
                            <span className='rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-500'>
                                {category.count}
                            </span>
                        </Link>
                    ))}
                </div>
            </motion.div>

            {/* Popular Posts */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='rounded-2xl bg-white p-6 shadow-sm'>
                <h3 className='text-lg font-semibold text-gray-900'>Popüler Yazılar</h3>
                <div className='mt-4 space-y-4'>
                    {popularPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className='group flex gap-4'>
                            <div className='aspect-[4/3] w-20 overflow-hidden rounded-lg'>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={80}
                                    height={60}
                                    className='transform object-cover transition duration-300 group-hover:scale-110'
                                />
                            </div>
                            <div className='flex-1'>
                                <h4 className='line-clamp-2 font-medium text-gray-900 transition-colors group-hover:text-sky-500'>
                                    {post.title}
                                </h4>
                                <div className='mt-1 text-sm text-gray-600'>{post.date}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>

            {/* Tags */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='rounded-2xl bg-white p-6 shadow-sm'>
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>
                    <Tag className='h-5 w-5' />
                    Etiketler
                </h3>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/blog/etiket/${tag.toLowerCase()}`}
                            className='rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-500 transition-colors hover:bg-sky-500 hover:text-white'>
                            {tag}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
