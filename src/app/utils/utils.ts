import { map } from 'lodash'

export function getIdsFromURLs(urls: string[]): number[] {
  return map(urls, (url: string) => Number(url.split('/').pop()))
}
