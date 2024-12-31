import type { Metadata } from 'next'
import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'
import { ToastProvider } from '@/components/toast'
import './globals.css'

export const metadata: Metadata = {
    title: {
        default: 'Kiymet Veteriner Klinigi',
        template: '%s | Kiymet Veteriner Klinigi',
    },
    description:
        'Izmir Bornova Ataturk Mahallesinde yer alan klinigimizde, pet dostlariniz icin profesyonel veteriner hizmetleri sunuyoruz.',
    keywords:
        'veteriner, klinik, pet, hayvan hastanesi, asi, cerrahi, izmir veteriner, bornova veteriner, ataturk mahallesi veteriner',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='tr'>
            <body>
                <ToastProvider>
                    <Header />
                    {children}
                    <Footer />
                </ToastProvider>
            </body>
        </html>
    )
}
