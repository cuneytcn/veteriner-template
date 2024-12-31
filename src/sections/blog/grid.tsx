'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/button'
import Image from 'next/image'

const posts = [
    {
        title: 'Pet Beslenmesinde Dikkat Edilmesi Gerekenler',
        description:
            'Sağlıklı ve dengeli beslenme, pet dostlarımızın yaşam kalitesi için çok önemlidir. Peki nelere dikkat etmeliyiz?',
        image: '/images/blog/pet-nutrition.jpg',
        date: '15 Aralık 2023',
        readTime: '5 dk',
        category: 'Beslenme',
    },
    {
        title: 'Düzenli Veteriner Kontrolünün Önemi',
        description:
            'Pet dostlarımızın sağlığı için düzenli veteriner kontrolleri neden önemlidir? Hangi sıklıkta kontrole gitmeliyiz?',
        image: '/images/blog/vet-care.jpg',
        date: '10 Aralık 2023',
        readTime: '4 dk',
        category: 'Sağlık',
    },
    {
        title: 'Köpek Eğitiminde Temel İpuçları',
        description:
            'Köpek dostlarımızın eğitimi için pratik ipuçları ve öneriler. Doğru yaklaşımla eğitim nasıl verilir?',
        image: '/images/blog/pet-training.jpg',
        date: '5 Aralık 2023',
        readTime: '6 dk',
        category: 'Eğitim',
    },
]

export function BlogGrid() {
    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Son Blog Yazıları</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            Pet dostlarınızın sağlığı ve bakımı hakkında faydalı bilgiler
                        </p>
                    </motion.div>

                    <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md'>
                                <div className='aspect-video overflow-hidden'>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={600}
                                        height={400}
                                        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                    />
                                </div>
                                <div className='flex flex-1 flex-col p-6'>
                                    <div className='flex items-center gap-4 text-sm'>
                                        <time className='text-gray-500'>{post.date}</time>
                                        <span className='text-gray-300'>•</span>
                                        <span className='text-gray-500'>{post.readTime} okuma</span>
                                    </div>
                                    <h3 className='mt-4 text-xl font-bold text-gray-900 group-hover:text-sky-500'>
                                        {post.title}
                                    </h3>
                                    <p className='mt-2 flex-1 text-gray-600'>{post.description}</p>
                                    <div className='mt-4'>
                                        <span className='inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-500'>
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='mt-16 text-center'>
                        <Button variant='lightBlue' size='lg' href='/blog'>
                            Tüm Yazılar
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
