import { TBlock } from "../../../block.exports"
import { CatchError, TYPE } from "../../../error.export"

export const verifyNewBlock = (newBlock: TBlock, previousBlock: TBlock) => {
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

function calculateHashForBlock(newBlock: TBlock) {
  return "Function not implemented"
}
