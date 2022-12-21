import { TYPE } from "../../../models/error.exports"
import { TVerifyBlockStructure } from "../../../models/validator.exports"
import { CatchError } from "../../error/class.export"

export const verifyBlockStructure: TVerifyBlockStructure = (block) => {
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
