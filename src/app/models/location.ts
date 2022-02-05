import { Character } from './character'

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: Character[]
  url: string
  created: string
}
