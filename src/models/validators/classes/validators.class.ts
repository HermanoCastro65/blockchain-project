import { TBlock } from "../../block.exports"
import { CatchError, TYPE } from "../../error.export"
import {
  IValidBlockStructure,
  IValidChain,
  IValidNewBlock,
} from "../interfaces.exports"
import { TValidatorsReturn, TValidNewBlockParams } from "../types.export"
import { TValidChainParams } from "../types.export"
import { verifyNewBlock } from "./functions.export"

export class Validator
  implements IValidNewBlock, IValidBlockStructure, IValidChain
{
  isValidNewBlock(params: TValidNewBlockParams): TValidatorsReturn {
    if (!params) return new CatchError(TYPE.PARAM, params).mesage()

    const { newBlock, previousBlock } = params
    return verifyNewBlock(newBlock, previousBlock)
  }

  isValidBlockStructure(params: TBlock): TValidatorsReturn {
    throw new Error("Method not implemented.")
  }

  isValidChain(params: TValidChainParams): TValidatorsReturn {
    throw new Error("Method not implemented.")
  }
}
