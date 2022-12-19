import { TBlock } from "./block.type"

export type TGenerateBlock = {
  (data: string): TBlock
}
