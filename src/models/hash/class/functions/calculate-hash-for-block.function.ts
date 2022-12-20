import { TBlock } from "../../../block.exports"
import { CatchError, TYPE } from "../../../error.export"
import { Hash } from "../hash.class"

export const calculateHashForBlock = (block: TBlock) => {
  if (!block) return new CatchError(TYPE.PARAM, block).mesage()

  const { index, hash, previousHash, timestamp, data } = block
  return new Hash().calculate({
    index,
    previousHash,
    timestamp,
    data,
  })
}
