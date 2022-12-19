import { TBlock } from "../../block.exports"

export type TValidatorsReturn = boolean

export type TValidNewBlockParams = {
  newBlock: TBlock
  previousBlock: TBlock
}

export type TValidBlockStructureParams = TBlock

export type TValidChainParams = TBlock[]
