import { TCreateBlockParams, TCreateBlockReturn } from "../types.exports"

export interface ICreateBlock {
  create(block: TCreateBlockParams): TCreateBlockReturn
}
