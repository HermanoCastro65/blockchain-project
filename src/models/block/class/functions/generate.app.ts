import { Hash } from "../../../hash.exports"
import { Block, TBlock, TGenerateNextBlock } from "../../../block.exports"
import { CatchError, TYPE } from "../../../error.export"
import { getLatestBlock } from "../functions.exports"

export const generateNextBlock: TGenerateNextBlock = (data) => {
  if (!data) new CatchError(TYPE.PARAM, data).mesage()

  const previousBlock = getLatestBlock()
  const previousHash = previousBlock.hash
  const index = previousBlock.index + 1
  const timestamp = new Date().getTime() / 1000

  const hash = new Hash().calculate({
    index,
    previousHash,
    timestamp,
    data,
  })

  return new Block().create({ index, hash, previousHash, timestamp, data })
}
