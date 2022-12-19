import { Hash } from "../../../models/hash.exports"
import {
  Block,
  TBlock,
  TGenerateNextBlock,
} from "../../../models/block.exports"
import { CatchError, TYPE } from "../../../models/error.export"

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

function getLatestBlock(): TBlock {
  throw new Error("Function not implemented.")
}
