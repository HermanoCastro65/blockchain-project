import { TBlock } from "../../block.exports"
import { CatchError } from "../../error.export"

export type TValidatorsReturn = boolean | Error

export type TValidNewBlockParams = {
  newBlock: TBlock
  previousBlock: TBlock
}

export type TValidBlockStructureParams = TBlock

export type TValidChainParams = TBlock[]
