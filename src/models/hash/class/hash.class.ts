import { ParamError } from "../../../error/param.export"
import { ICalculateHash } from "../interface.export"
import { TCalculateHashParams } from "../types.exports"

export class Hash implements ICalculateHash {
  calculate(params: TCalculateHashParams): string {
    if (!params) new ParamError(params).mesage()

    const { index, previousHash, timestamp, data } = params
    const crypto = CryptoJS.SHA256(
      index + previousHash + timestamp + data
    ).toString()

    return crypto
  }
}
