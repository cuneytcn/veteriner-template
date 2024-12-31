import type { Metadata } from 'next'
import { BlogPost } from '@/sections/blog/post'
import { BlogSidebar } from '@/sections/blog/sidebar'
import { articles } from '@/data/blog'

interface Props {
    params: {
        slug: string
    }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = articles.find((article) => article.slug === params.slug)

    if (!article) {
        return {
            title: 'Yazı Bulunamadı | Kıymet Veteriner Kliniği',
            description: 'Aradığınız blog yazısı bulunamadı.',
        }
    }

    return {
        title: `${article.title} | Kıymet Veteriner Kliniği`,
        description: article.excerpt,
        keywords: `veteriner blog, pet sağlığı, hayvan bakımı, ${article.title.toLowerCase().split(' ').join(', ')}`,
    }
}

export default async function BlogDetailPage({ params }: Props) {
    const article = articles.find((article) => article.slug === params.slug)

    if (!article) {
        return (
            <main className='flex min-h-screen flex-col'>
                <section className='bg-white py-24'>
                    <div className='container px-4'>
                        <div className='mx-auto max-w-2xl text-center'>
                            <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Yazı Bulunamadı</h1>
                            <p className='mt-4 text-lg text-gray-600'>
                                Aradığınız blog yazısı bulunamadı. Lütfen blog ana sayfasına dönün.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main className='flex min-h-screen flex-col'>
            <section className='bg-white py-24'>
                <div className='container px-4'>
                    <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-12'>
                        <div className='lg:col-span-8'>
                            <BlogPost article={article} />
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
