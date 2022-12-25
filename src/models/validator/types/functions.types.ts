import { TBlock } from "@models/block.exports"

export type TVerifydNewBlock = {
  (newBlock: TBlock, previousBlock: TBlock): boolean | Error
}

export type TVerifyBlockStructure = {
  (params: TBlock): boolean | Error
}

export type TVerifyChaTn = {
  (params: TBlock[]): boolean | Error
}
