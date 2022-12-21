import { TBlock } from "../../block.exports"

export type TValidatorsReturn = boolean | Error

export type TValidNewBlockParams = { newBlock: TBlock; previousBlock: TBlock }

export type TValidBlockStructureParams = TBlock

export type TValidChainParams = TBlock[]
