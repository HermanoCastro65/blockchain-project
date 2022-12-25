import { CatchError } from "@error/class.export"
import { TBlock } from "@models/block.exports"
import { TYPE } from "@models/error.exports"
import {
  IValidNewBlock,
  IValidBlockStructure,
  IValidChain,
  TValidNewBlockParams,
  TValidatorsReturn,
  TValidChainParams,
} from "@models/validator.exports"
import {
  verifyNewBlock,
  verifyBlockStructure,
  verifyChain,
} from "@validator/functions.exports"

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
