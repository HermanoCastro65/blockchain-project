import { TBlock } from "../../block.exports"

export type TValidatorReturn = boolean

export type TValidNewBlockParams = {
  newBlock: TBlock
  previousBlock: TBlock
}

export type TValidBlockStructure = TBlock

export type TValidChain = TBlock[]
