import Header from '../Header'
import { getDictionary } from '../dictionaries'

// Next.js 15 이상 버전에서는 params를 기다려(await)줘야 합니다!
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  // 1. 주소창의 언어 파라미터를 가져옵니다.
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ko'
  
  // 2. 해당 언어 사전을 가져옵니다.
  const dict = await getDictionary(lang as 'ko' | 'en' | 'zh')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      <section className="bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            {dict.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            {dict.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-5xl mb-6">🏥</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{dict.services.medicalTitle}</h3>
            <p className="text-gray-600 leading-relaxed">{dict.services.medicalDesc}</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-5xl mb-6">✈️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{dict.services.visaTitle}</h3>
            <p className="text-gray-600 leading-relaxed">{dict.services.visaDesc}</p>
          </div>
        </div>
      </section>
    </div>
  )
}