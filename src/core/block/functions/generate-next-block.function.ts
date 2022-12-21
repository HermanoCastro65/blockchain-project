import { TGenerateNextBlock } from "../../../models/block.exports"
import { TYPE } from "../../../models/error.exports"
import { CatchError } from "../../error/class.export"
import { Hash } from "../../hash/class.export"
import { Block } from "../class.export"
import { getLatestBlock } from "./get-latest-block.function"

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
