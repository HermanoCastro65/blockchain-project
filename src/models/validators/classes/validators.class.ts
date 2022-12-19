import { TBlock } from "../../block.exports"
import { ParamError } from "../../error.export"
import {
  IValidBlockStructure,
  IValidChain,
  IValidNewBlock,
} from "../interfaces.exports"
import { TValidNewBlockParams } from "../types.export"
import { TValidChainParams } from "../types.export"
import { verifyNewBlock } from "./functions.export"

export class Validator
  implements IValidNewBlock, IValidBlockStructure, IValidChain
{
  isValidNewBlock(params: TValidNewBlockParams): boolean {
    if (!params) new ParamError(params).mesage()

    const { newBlock, previousBlock } = params
    return verifyNewBlock(newBlock, previousBlock)
  }
  isValidBlockStructure(params: TBlock): boolean {
    throw new Error("Method not implemented.")
  }
  isValidChain(params: TValidChainParams): boolean {
    throw new Error("Method not implemented.")
  }
}
