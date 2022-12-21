import { TCalculateHashParams, TCalculateHashReturn } from "../types.exports"

export interface ICalculateHash {
  calculate(params: TCalculateHashParams): TCalculateHashReturn
}
