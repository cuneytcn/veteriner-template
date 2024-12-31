interface Author {
    name: string
    slug: string
    image?: string
}

interface Category {
    title: string
    slug: string
}

interface Article {
    title: string
    slug: string
    excerpt: string
    content: string
    image?: string
    date: string
    readTime: number
    author: Author
    category: Category
}

const authors: Author[] = [
    {
        name: 'Dr. Ahmet Yılmaz',
        slug: 'dr-ahmet-yilmaz',
        image: '/images/team/doctor-1.jpg',
    },
    {
        name: 'Dr. Ayşe Demir',
        slug: 'dr-ayse-demir',
        image: '/images/team/doctor-2.jpg',
    },
    {
        name: 'Dr. Mehmet Kaya',
        slug: 'dr-mehmet-kaya',
        image: '/images/team/doctor-3.jpg',
    },
]

const categories: Category[] = [
    {
        title: 'Sağlık',
        slug: 'saglik',
    },
    {
        title: 'Beslenme',
        slug: 'beslenme',
    },
    {
        title: 'Bakım',
        slug: 'bakim',
    },
    {
        title: 'Eğitim',
        slug: 'egitim',
    },
]

export const articles: Article[] = [
    {
        title: 'Köpeklerde Aşılama Takvimi: Hangi Aşılar Ne Zaman Yapılmalı?',
        slug: 'kopeklerde-asilama-takvimi',
        excerpt:
            'Köpeğinizin sağlıklı bir yaşam sürmesi için düzenli aşılama çok önemlidir. Peki hangi aşılar ne zaman yapılmalı? İşte detaylı aşı takvimi...',
        content: `
            Köpeklerin sağlıklı bir yaşam sürmesi için düzenli aşılama programı çok önemlidir. Bu yazımızda köpeklerde aşılama takvimi hakkında detaylı bilgi vereceğiz.

            ## Yavru Köpeklerde Aşı Takvimi

            ### 6-8 Haftalık
            - Karma Aşı (DHPP)
            - İç Parazit

            ### 9-11 Haftalık
            - Karma Aşı (DHPP) Tekrar
            - Kuduz Aşısı

            ### 12-14 Haftalık
            - Karma Aşı (DHPP) Son
            - Lyme Hastalığı (gerekli ise)

            ## Yetişkin Köpeklerde Aşı Takvimi

            Yetişkin köpeklerde aşılar yıllık olarak tekrarlanmalıdır. Özellikle:
            - Karma Aşı
            - Kuduz Aşısı
            - Kennel Cough (gerekli ise)

            Düzenli aşılama programı, köpeğinizi birçok tehlikeli hastalıktan koruyacaktır. Aşı takvimi için veteriner hekiminize danışmayı unutmayın.
        `,
        image: '/images/blog/vaccination.jpg',
        date: '15 Aralık 2023',
        readTime: 5,
        author: authors[0],
        category: categories[0],
    },
    {
        title: 'Kedilerde Sağlıklı Beslenme: Doğru Mama Seçimi Nasıl Yapılır?',
        slug: 'kedilerde-saglikli-beslenme',
        excerpt:
            'Kedinizin sağlıklı ve mutlu bir yaşam sürmesi için doğru beslenme çok önemlidir. İşte kedi maması seçerken dikkat etmeniz gerekenler...',
        content: `
            Kedilerin sağlıklı bir yaşam sürmesi için doğru beslenme kritik öneme sahiptir. Bu yazımızda kedi maması seçerken dikkat edilmesi gereken noktaları ele alacağız.

            ## Yaşa Göre Mama Seçimi

            ### Yavru Kediler (0-12 ay)
            - Yüksek protein
            - Yüksek kalori
            - DHA içeren

            ### Yetişkin Kediler (1-7 yaş)
            - Dengeli protein
            - Orta kalori
            - Taurin içeren

            ### Yaşlı Kediler (7+ yaş)
            - Düşük kalori
            - Eklem desteği
            - Kolay sindirilir

            ## Mama Seçerken Dikkat Edilecek Noktalar

            1. İlk içerik et olmalı
            2. Yapay koruyucu içermemeli
            3. Tahıl oranı düşük olmalı
            4. Kedinizin yaşına uygun olmalı

            Doğru mama seçimi için veteriner hekiminize danışmayı unutmayın.
        `,
        image: '/images/blog/cat-nutrition.jpg',
        date: '10 Aralık 2023',
        readTime: 6,
        author: authors[1],
        category: categories[1],
    },
    {
        title: 'Kış Aylarında Evcil Hayvan Bakımı: Önemli İpuçları',
        slug: 'kis-aylarinda-evcil-hayvan-bakimi',
        excerpt:
            'Soğuk havalarda pet dostlarımızın sağlığını korumak için özel önlemler almalıyız. İşte kış aylarında evcil hayvan bakımı için önemli ipuçları...',
        content: `
            Kış ayları, evcil hayvanlarımız için özel bakım gerektiren bir dönemdir. Bu yazımızda kış aylarında pet dostlarımızın sağlığını korumak için dikkat edilmesi gereken noktaları ele alacağız.

            ## Dış Ortam Koruması

            1. Sıcak tutun
            - Kalın battaniyeler
            - Isıtılmış yataklar
            - Soğuktan korunaklı alanlar

            2. Pati bakımı
            - Pati kremleri kullanın
            - Tuz ve buzdan koruyun
            - Düzenli kontrol edin

            ## Beslenme

            Kış aylarında beslenme düzeni:
            - Kalori ihtiyacı artabilir
            - Bol su tüketimi önemli
            - Vitamin takviyesi gerekebilir

            ## Egzersiz

            Kış aylarında aktivite:
            - İç mekan oyunları
            - Kısa yürüyüşler
            - Zihinsel aktiviteler

            Soğuk havalarda evcil hayvanınızın sağlığı için bu önerileri dikkate alın ve düzenli veteriner kontrollerini ihmal etmeyin.
        `,
        image: '/images/blog/winter-care.jpg',
        date: '5 Aralık 2023',
        readTime: 7,
        author: authors[2],
        category: categories[2],
    },
]
