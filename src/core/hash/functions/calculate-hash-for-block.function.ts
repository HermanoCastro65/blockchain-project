import { CatchError } from "@error/class.export"
import { TYPE } from "@models/error.exports"
import { TcalculateHashForBlock } from "@models/hash.exports"
import { Hash } from "@hash/class.export"

export const calculateHashForBlock: TcalculateHashForBlock = (block) => {
  if (!block) return new CatchError(TYPE.PARAM, block).mesage()

  const { index, hash, previousHash, timestamp, data } = block
  return new Hash().calculate({
    index,
    previousHash,
    timestamp,
    data,
  })
}
