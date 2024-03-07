import { type Quantity } from '../Quantity.ts'

export type Mass = Quantity<MassUnit>

export enum MassUnit {
  KILOGRAM = 'kilogram',
  GRAM = 'gram',
  MILLIGRAM = 'milligram',
}

export const Mass = {
  /**
   * Conversion factors in grams per unit
   */
  MAGNITUDES: {
    [MassUnit.KILOGRAM]: 1000,
    [MassUnit.GRAM]: 1,
    [MassUnit.MILLIGRAM]: 1 / 1_000,
  } satisfies Record<MassUnit, number>,
} as const