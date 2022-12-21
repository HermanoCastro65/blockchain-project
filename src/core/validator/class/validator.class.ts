import { TBlock } from "../../../models/block.exports"
import { TYPE } from "../../../models/error.exports"
import { CatchError } from "../../error/class.export"
import {
  IValidBlockStructure,
  IValidChain,
  IValidNewBlock,
} from "../../../models/validator.exports"
import {
  TValidatorsReturn,
  TValidNewBlockParams,
} from "../../../models/validator/types.exports"
import { TValidChainParams } from "../../../models/validator/types.exports"
import { verifyBlockStructure, verifyNewBlock } from "../functions.exports"
import { verifyChain } from "../functions/verify-chain.function"

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
