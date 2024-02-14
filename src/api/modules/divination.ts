import { randomIndexWithSalt } from "@/utils/random"
import { useI18n } from "vue-i18n"

type IndependentDivinationData = {
  [key in 'comments' | 'colors' | 'directions' | 'lucky-time']: string
}

export const getIndependentDivination = async () => {
  const { locale } = useI18n()

  const divinationData = await fetch('/divination/independent.json')
    .then(res => res.json())

  return Object.keys(divinationData)
    .reduce<IndependentDivinationData>((data, key) => {
      const multLangData = divinationData[key]
      const options = multLangData[locale.value] || multLangData.tw
      data[key as keyof IndependentDivinationData] = options[randomIndexWithSalt(key, options)]
      return data
    }, {} as IndependentDivinationData)
}

type ClassifiableDivinationData = {
  [key in 'love' | 'work' | 'money' | 'journey' | 'health']: {
    score: number
    text: string
  }
}

export const getClassifiableDivinationData = async () => {
  const { locale } = useI18n()

  const classifiableData = await fetch('/divination/classifiable.json')
    .then(res => res.json())

  return Object.keys(classifiableData)
    .reduce<ClassifiableDivinationData>((data, key) => {
      const multLangData = classifiableData[key]
      const options = multLangData[locale.value] || multLangData.tw
      const index = randomIndexWithSalt(key, options)
      data[key as keyof ClassifiableDivinationData] = {
        score: index + 1, text: options[index]
      }
      return data
    }, {} as ClassifiableDivinationData)
}