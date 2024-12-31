'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/button'
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'
import type { Article } from '@/data/blog'
import { useState } from 'react'

type Props = {
    article: Article
}

export function BlogPost({ article }: Props) {
    const [showShareTooltip, setShowShareTooltip] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
        setShowShareTooltip(true)
        setTimeout(() => setShowShareTooltip(false), 2000)
    }

    return (
        <article className='overflow-hidden rounded-2xl bg-white shadow-sm'>
            {/* Hero Image */}
            <div className='aspect-[2/1] overflow-hidden'>
                <Image
                    src={article.image}
                    alt={article.title}
                    width={1200}
                    height={600}
                    className='h-full w-full object-cover'
                />
            </div>

            {/* Content */}
            <div className='p-6 sm:p-8'>
                {/* Meta */}
                <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600'>
                    <span className='rounded-full bg-sky-50 px-3 py-1 text-sky-500'>{article.category}</span>
                    <span className='flex items-center gap-2'>
                        <Calendar className='h-4 w-4' />
                        {article.date}
                    </span>
                    <span className='flex items-center gap-2'>
                        <Clock className='h-4 w-4' />
                        {article.readTime}
                    </span>
                </div>

                {/* Title */}
                <h1 className='mt-4 text-3xl font-bold text-gray-900 sm:text-4xl'>{article.title}</h1>

                {/* Author */}
                <div className='mt-6 flex items-center gap-4'>
                    <div className='h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
                        {/* Author image will be added */}
                    </div>
                    <div>
                        <div className='font-medium text-gray-900'>{article.author}</div>
                        <div className='text-sm text-gray-600'>Veteriner Hekim</div>
                    </div>
                </div>

                {/* Share */}
                <div className='mt-6 flex items-center gap-4'>
                    <span className='flex items-center gap-2 text-sm font-medium text-gray-600'>
                        <Share2 className='h-4 w-4' />
                        Paylaş
                    </span>
                    <div className='flex items-center gap-2'>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={() =>
                                window.open(
                                    `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                                    '_blank',
                                )
                            }>
                            <Facebook className='h-4 w-4' />
                        </Button>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={() =>
                                window.open(
                                    `https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`,
                                    '_blank',
                                )
                            }>
                            <Twitter className='h-4 w-4' />
                        </Button>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={() =>
                                window.open(
                                    `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${article.title}`,
                                    '_blank',
                                )
                            }>
                            <Linkedin className='h-4 w-4' />
                        </Button>
                        <div className='relative'>
                            <Button variant='ghost' size='icon' onClick={copyToClipboard}>
                                <LinkIcon className='h-4 w-4' />
                            </Button>
                            {showShareTooltip && (
                                <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs text-white'>
                                    Kopyalandı!
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className='prose prose-sky mt-8 max-w-none'>
                    {article.content.split('\n').map((line, index) => (
                        <p key={index}>{line.trim()}</p>
                    ))}
                </div>

                {/* Tags */}
                <div className='mt-8 flex flex-wrap gap-2'>
                    {article.tags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/blog/etiket/${tag.toLowerCase()}`}
                            className='rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-500 transition-colors hover:bg-sky-500 hover:text-white'>
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </article>
    )
}
