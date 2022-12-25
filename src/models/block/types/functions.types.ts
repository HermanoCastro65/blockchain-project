import { TBlock } from "@models/block.exports"

export type TGenerateNextBlock = {
  (data: string): TBlock
}

export type TGetLatestBlock = {
  (blocks?: TBlock[]): TBlock
}
