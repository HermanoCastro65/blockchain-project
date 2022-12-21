import { TBlock } from "./block.types"

export type TGenerateNextBlock = {
  (data: string): TBlock
}

export type TGetLatestBlock = {
  (blocks?: TBlock[]): TBlock
}
