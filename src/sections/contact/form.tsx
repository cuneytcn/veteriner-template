'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Textarea } from '@/components/textarea'
import { useToast } from '@/components/toast'

interface FormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Burada form verilerini backend'e gönderme işlemi yapılacak
            await new Promise((resolve) => setTimeout(resolve, 1000))

            toast({
                title: 'Başarılı!',
                description: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
                variant: 'success',
            })

            setFormData(initialFormData)
        } catch (error) {
            toast({
                title: 'Hata!',
                description: 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.',
                variant: 'destructive',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='overflow-hidden rounded-2xl bg-white p-6 shadow-sm sm:p-8'>
            <h2 className='text-2xl font-bold text-gray-900'>Bize Ulaşın</h2>
            <p className='mt-2 text-gray-600'>Sorularınız veya randevu talepleriniz için formu doldurabilirsiniz.</p>

            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
                <div className='grid gap-6 sm:grid-cols-2'>
                    <div>
                        <label htmlFor='name' className='text-sm font-medium text-gray-900'>
                            Ad Soyad
                        </label>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className='mt-2'
                            placeholder='John Doe'
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='text-sm font-medium text-gray-900'>
                            E-posta
                        </label>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className='mt-2'
                            placeholder='john@example.com'
                        />
                    </div>
                </div>

                <div className='grid gap-6 sm:grid-cols-2'>
                    <div>
                        <label htmlFor='phone' className='text-sm font-medium text-gray-900'>
                            Telefon
                        </label>
                        <Input
                            id='phone'
                            name='phone'
                            type='tel'
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className='mt-2'
                            placeholder='0532 123 45 67'
                        />
                    </div>
                    <div>
                        <label htmlFor='subject' className='text-sm font-medium text-gray-900'>
                            Konu
                        </label>
                        <Input
                            id='subject'
                            name='subject'
                            type='text'
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className='mt-2'
                            placeholder='Randevu talebi'
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor='message' className='text-sm font-medium text-gray-900'>
                        Mesaj
                    </label>
                    <Textarea
                        id='message'
                        name='message'
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className='mt-2'
                        placeholder='Mesajınızı buraya yazın...'
                        rows={6}
                    />
                </div>

                <div>
                    <Button type='submit' className='w-full' disabled={isSubmitting}>
                        {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                    </Button>
                </div>
            </form>
        </motion.div>
    )
}
