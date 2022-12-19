import { TBlock } from "../../../block.exports"
import { CatchError, TYPE } from "../../../error.export"

export const verifyBlockStructure = (block: TBlock) => {
  const { index, hash, previousHash, timestamp, data } = block

  if (
    typeof index === "number" &&
    typeof hash === "string" &&
    typeof previousHash === "string" &&
    typeof timestamp === "number" &&
    typeof data === "string"
  )
    return true

  return new CatchError(TYPE.INVALID, block).mesage()
}
