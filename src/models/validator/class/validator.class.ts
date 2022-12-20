import { TBlock } from "../../block.exports"
import { CatchError, TYPE } from "../../error.export"
import {
  IValidBlockStructure,
  IValidChain,
  IValidNewBlock,
} from "../interfaces.exports"
import { TValidatorsReturn, TValidNewBlockParams } from "../types.export"
import { TValidChainParams } from "../types.export"
import { verifyBlockStructure, verifyNewBlock } from "./functions.export"
import { verifyChain } from "./functions/verify-chain.function"

export class Validator
  implements IValidNewBlock, IValidBlockStructure, IValidChain
{
  isValidNewBlock(params: TValidNewBlockParams): TValidatorsReturn {
    if (!params) return new CatchError(TYPE.PARAM, params).mesage()

    const { newBlock, previousBlock } = params
    return verifyNewBlock(newBlock, previousBlock)
  }

  isValidBlockStructure(params: TBlock): TValidatorsReturn {
    if (!params) return new CatchError(TYPE.PARAM, params).mesage()
    return verifyBlockStructure(params)
  }

  isValidChain(params: TValidChainParams): TValidatorsReturn {
    return verifyChain(params)
  }
}
