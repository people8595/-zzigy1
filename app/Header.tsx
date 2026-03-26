'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function Header({ lang }: { lang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    // 현재 주소(pathname)에서 기존 언어를 새 언어로 교체합니다.
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-700 font-sans">MediSupport</div>
        
        <div className="flex items-center space-x-4">
          <select 
            value={lang} 
            onChange={handleLanguageChange}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ko">🇰🇷 한국어</option>
            <option value="en">🇺🇸 English</option>
            <option value="zh">🇨🇳 中文</option>
          </select>
        </div>
      </div>
    </header>
  )
}