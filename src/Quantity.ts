import { Distance, type DistanceUnit } from './Distance.ts'
import { Time, type TimeUnit } from './Time.ts'

export interface Quantity<TUnit extends Unit> {
  value: number
  unit: TUnit
}

export type Unit = DistanceUnit | TimeUnit

const MAGNITUDES: Record<Unit, number> = {
  ...Distance.MAGNITUDES,
  ...Time.MAGNITUDES,
} as const

// 1 convert function
// Takes a scalar and a list of magnitudes
// Has numerators and denominators (i.e m/s^2)
// Scalar is always:
// - Multiplied by numerators
// - Divided by denominators
// To convert, one must provide compatible units. All matching units will be converted

export const Quantity = {
  convert<TUnit extends Unit>(quantity: Quantity<TUnit>, newUnit: TUnit): Quantity<TUnit> {
    return {
      value: Quantity.in(quantity, newUnit),
      unit: newUnit,
    }
  },

  in<TUnit extends Unit>(quantity: Quantity<TUnit>, newUnit: TUnit): number {
    return quantity.value * MAGNITUDES[quantity.unit] / MAGNITUDES[newUnit]
  },
} as const
