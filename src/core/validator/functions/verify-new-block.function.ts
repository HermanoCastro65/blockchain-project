import { TYPE } from "../../../models/error.exports"
import { TVerifydNewBlock } from "../../../models/validator/types/functions.types"
import { CatchError } from "../../error/class.export"
import { calculateHashForBlock } from "../../hash/functions.exports"

export const verifyNewBlock: TVerifydNewBlock = (newBlock, previousBlock) => {
  const { index, hash, previousHash, timestamp, data } = newBlock

  if (previousBlock.index + 1 !== index) {
    return new CatchError(TYPE.INVALID, index).mesage()
  } else if (previousBlock.hash !== previousHash) {
    return new CatchError(TYPE.INVALID, previousHash).mesage()
  } else if (calculateHashForBlock(newBlock) !== hash) {
    return new CatchError(TYPE.INVALID, hash).mesage()
  }

  return true
}
