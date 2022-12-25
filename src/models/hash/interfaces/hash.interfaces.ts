import {
  TCalculateHashParams,
  TCalculateHashReturn,
} from "@models/hash.exports"

export interface ICalculateHash {
  calculate(params: TCalculateHashParams): TCalculateHashReturn
}
