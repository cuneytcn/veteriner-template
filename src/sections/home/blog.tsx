'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/button'
import { articles } from '@/data/blog'

export function BlogSection() {
    // Ana sayfada son 3 blog yazısını gösterelim
    const recentArticles = articles.slice(0, 3)

    return (
        <section className='bg-white py-24'>
            <div className='container px-4'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Blog</h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            Pet dostlarınızın sağlığı ve bakımı hakkında faydalı bilgiler
                        </p>
                    </motion.div>

                    <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                        {recentArticles.map((article, index) => (
                            <motion.article
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative flex flex-col overflow-hidden rounded-2xl bg-gray-50'>
                                <div className='aspect-video'>
                                    {/* Geçici gradient, buraya blog görselleri gelecek */}
                                    <div className='h-full w-full bg-gradient-to-br from-sky-100 to-sky-50' />
                                </div>
                                <div className='flex flex-1 flex-col justify-between p-6'>
                                    <div className='flex-1'>
                                        <p className='text-sm font-medium text-sky-500'>
                                            <a
                                                href={`/blog/kategori/${article.category.slug}`}
                                                className='hover:underline'>
                                                {article.category.title}
                                            </a>
                                        </p>
                                        <div className='mt-2 block'>
                                            <h3 className='text-xl font-semibold text-gray-900 group-hover:text-sky-500'>
                                                <a href={`/blog/${article.slug}`}>
                                                    <span className='absolute inset-0' />
                                                    {article.title}
                                                </a>
                                            </h3>
                                            <p className='mt-3 line-clamp-3 text-base text-gray-600'>
                                                {article.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-6 flex items-center'>
                                        <div className='relative h-10 w-10 flex-shrink-0'>
                                            {/* Geçici gradient, buraya yazar avatarı gelecek */}
                                            <div className='h-full w-full rounded-full bg-gradient-to-br from-sky-100 to-sky-50' />
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-sm font-medium text-gray-900'>
                                                <a
                                                    href={`/blog/yazar/${article.author.slug}`}
                                                    className='hover:underline'>
                                                    {article.author.name}
                                                </a>
                                            </p>
                                            <div className='flex space-x-1 text-sm text-gray-600'>
                                                <time dateTime={article.date}>{article.date}</time>
                                                <span aria-hidden='true'>&middot;</span>
                                                <span>{article.readTime} dk okuma</span>
                                            </div>
                                        </div>
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
                            Tüm Yazıları Görüntüle
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
