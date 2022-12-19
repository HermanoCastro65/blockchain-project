import { TBlock } from "./block.type"

export type TGenerateNextBlock = {
  (data: string): TBlock
}
