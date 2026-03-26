import 'server-only'

const dictionaries = {
  ko: () => import('../dictionaries/ko.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  zh: () => import('../dictionaries/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'ko' | 'en' | 'zh') => dictionaries[locale]()
