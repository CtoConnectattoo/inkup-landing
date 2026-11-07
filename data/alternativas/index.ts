import { manychatData } from './manychat'
import { landbotData } from './landbot'
import type { AlternativaData } from './types'

/**
 * Todas las comparativas publicadas. Para añadir una nueva, crea su archivo en
 * data/alternativas/ y añádela aquí: aparece sola en /alternativas y en /alternativas/[slug].
 */
export const ALTERNATIVAS: AlternativaData[] = [manychatData, landbotData]

export const ALTERNATIVAS_MAP: Record<string, AlternativaData> = Object.fromEntries(
  ALTERNATIVAS.map((a) => [a.slug, a]),
)
