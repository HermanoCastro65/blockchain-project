import { TBlock } from "../../block.exports"

export type TCalculateHashParams = Omit<TBlock, "hash">
export type TCalculateHashReturn = string
