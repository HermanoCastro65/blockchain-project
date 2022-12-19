import {
  TValidatorsReturn,
  TValidBlockStructureParams,
  TValidChainParams,
  TValidNewBlockParams,
} from "../types.export"

export interface IValidNewBlock {
  isValidNewBlockParams(params: TValidNewBlockParams): TValidatorsReturn
}

export interface IValidBlockStructure {
  isValidBlockStructure(params: TValidBlockStructureParams): TValidatorsReturn
}

export interface IValidChain {
  isValidChain(params: TValidChainParams): TValidatorsReturn
}
