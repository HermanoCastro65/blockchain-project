import {
  TValidatorsReturn,
  TValidBlockStructureParams,
  TValidChainParams,
  TValidNewBlockParams,
} from "../types.exports"

export interface IValidNewBlock {
  isValidNewBlock(params: TValidNewBlockParams): TValidatorsReturn
}

export interface IValidBlockStructure {
  isValidBlockStructure(params: TValidBlockStructureParams): TValidatorsReturn
}

export interface IValidChain {
  isValidChain(params: TValidChainParams): TValidatorsReturn
}
