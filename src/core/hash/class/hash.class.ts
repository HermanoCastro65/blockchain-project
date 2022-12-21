import { TYPE } from "../../../models/error.exports"
import {
  ICalculateHash,
  TCalculateHashParams,
} from "../../../models/hash.exports"
import { CatchError } from "../../error/class.export"

export class Hash implements ICalculateHash {
  calculate(params: TCalculateHashParams): string {
    if (!params) new CatchError(TYPE.PARAM, params).mesage()

    const { index, previousHash, timestamp, data } = params
    const crypto = CryptoJS.SHA256(
      index + previousHash + timestamp + data
    ).toString()

    return crypto
  }
}
