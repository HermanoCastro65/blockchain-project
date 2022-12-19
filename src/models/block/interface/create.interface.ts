import { TCreateBlockParams, TCreateBlockReturn } from "../types.export"

export interface ICreateBlock {
  create(block: TCreateBlockParams): TCreateBlockReturn
}
