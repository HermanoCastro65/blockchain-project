import { TBlock } from "@models/block.exports"

export type THash = string

export type TCalculateHashParams = Omit<TBlock, "hash">
export type TCalculateHashReturn = THash
