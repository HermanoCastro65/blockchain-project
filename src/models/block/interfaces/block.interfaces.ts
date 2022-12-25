import { TCreateBlockParams, TCreateBlockReturn } from "@models/block.exports"

export interface ICreateBlock {
  create(block: TCreateBlockParams): TCreateBlockReturn
}
