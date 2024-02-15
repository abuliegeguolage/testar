import { describe, it, expect, beforeAll, vi, afterAll, beforeEach } from 'vitest'

import {
  getIndependentDivination,
  getClassifiableDivinationData
} from '../modules/divination'

const BASE_DATE = '2024-02-15'
const COMEPARE_DATE = '2024-02-16'

beforeEach(() => {
  vi.setSystemTime(new Date(BASE_DATE))
})

afterAll(() => {
  vi.useRealTimers()
})

global.fetch = vi.fn().mockResolvedValue({
  json: () => Promise.resolve({
    key1: ['評語1', '評語2', '評語3'],
    key2: ['評語1', '評語2', '評語3'],
    key3: ['評語1', '評語2', '評語3'],
    key4: ['評語1', '評語2', '評語3']
  })
})

const commonProgress = (action: (id: number, locale: string) => Promise<unknown>) => {
  it('get same data in one day', async () => {
    const data1 = await action(1, 'tw')
    const data2 = await action(1, 'tw')

    expect(data1).toEqual(data2)
  })

  it('get different data with different days', async () => {
    const data1 = await action(1, 'tw')
    vi.setSystemTime(COMEPARE_DATE)
    const data2 = await action(1, 'tw')

    expect(data1).not.toEqual(data2)
  })

  it('get different data with different id', async () => {
    const data1 = await action(1, 'tw')
    vi.setSystemTime(COMEPARE_DATE)
    const data2 = await action(2, 'tw')

    expect(data1).not.toEqual(data2)
  })
}

describe('api getIndependentDivination', () => {
  it('get independent divination data correctly', async () => {
    const data = await getIndependentDivination(1, 'tw')
    expect(data).toEqual({
      key1: '評語3',
      key2: '評語1',
      key3: '評語1',
      key4: '評語3'
    })
  })

  commonProgress(getIndependentDivination)
})

describe('api getClassifiableDivinationData', () => {

  it('get classifiable divination data correctly', async () => {
    const data = await getClassifiableDivinationData(1, 'tw')
    expect(data).toEqual({
      key1: {
        score: 3,
        text: '評語3'
      },
      key2: {
        score: 1,
        text: '評語1'
      },
      key3: {
        score: 1,
        text: '評語1'
      },
      key4: {
        score: 3,
        text: '評語3'
      }
    })
  })

  commonProgress(getClassifiableDivinationData)
})
