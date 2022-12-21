import { TYPE } from "../../../models/error.exports"
import { CatchError } from "../../error/class.export"
import {
  TVerifyBlockStructure,
  TVerifyChaTn,
} from "../../../models/validator.exports"
import { Validator } from "../class/validator.class"
import { genesisBlock } from "../../block/constants.exports"

const isValidGenesis: TVerifyBlockStructure = (block) => {
  if (!block) return new CatchError(TYPE.PARAM, block).mesage()
  return JSON.stringify(block) === JSON.stringify(genesisBlock)
}

export const verifyChain: TVerifyChaTn = (blockchain) => {
  if (!isValidGenesis(blockchain[0])) {
    return new CatchError(TYPE.INVALID, blockchain).mesage()
  }

  for (let i = 1; i < blockchain.length; i++) {
    const compare = {
      newBlock: blockchain[i],
      previousBlock: blockchain[i - 1],
    }
    if (new Validator().isValidNewBlock(compare)) {
      return new CatchError(TYPE.INVALID, blockchain).mesage()
    }
  }

  return true
}
