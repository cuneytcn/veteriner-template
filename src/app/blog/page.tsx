import type { Metadata } from 'next'
import { BlogHero } from '@/sections/blog/hero'
import { BlogGrid } from '@/sections/blog/grid'
import { BlogSidebar } from '@/sections/blog/sidebar'

export const metadata: Metadata = {
    title: 'Blog | Kıymet Veteriner Kliniği',
    description:
        'Pet sağlığı, bakımı ve eğitimi hakkında faydalı bilgiler. Veteriner hekimlerimizden uzman tavsiyeleri ve güncel makaleler.',
    keywords: 'veteriner blog, pet sağlığı, hayvan bakımı, pet eğitimi, veteriner tavsiyeleri, izmir veteriner blog',
}

export default function Page() {
    return (
        <main className='flex min-h-screen flex-col'>
            <BlogHero />
            <section className='bg-white py-24'>
                <div className='container px-4'>
                    <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-12'>
                        <div className='lg:col-span-8'>
                            <BlogGrid />
                        </div>
                        <div className='lg:col-span-4'>
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
