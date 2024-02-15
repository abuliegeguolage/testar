import { randomIndexWithSalt } from "@/utils/random"
import { useI18n } from "vue-i18n"

export type IndependentDivinationData = {
  [key in 'comments' | 'colors' | 'directions' | 'lucky-time']: string
}

export const getIndependentDivination = async (aionId: number, locale: string) => {
  const divinationData = await fetch(`/divination/independent-${locale}.json`)
    .then(res => res.json())

  return Object.keys(divinationData)
    .reduce<IndependentDivinationData>((data, key) => {
      const options = divinationData[key]
      data[key as keyof IndependentDivinationData] = options[randomIndexWithSalt(key + aionId, options)]
      return data
    }, {} as IndependentDivinationData)
}

export type ClassifiableDivinationData = {
  [key in 'love' | 'work' | 'money' | 'journey' | 'health']: {
    score: number
    text: string
  }
}

export const getClassifiableDivinationData = async (aionId: number, locale: string) => {
  const classifiableData = await fetch(`/divination/classifiable-${locale}.json`)
    .then(res => res.json())

  return Object.keys(classifiableData)
    .reduce<ClassifiableDivinationData>((data, key) => {
      const options = classifiableData[key]
      const index = randomIndexWithSalt(key + aionId, options)
      data[key as keyof ClassifiableDivinationData] = {
        score: index + 1, text: options[index]
      }
      return data
    }, {} as ClassifiableDivinationData)
}