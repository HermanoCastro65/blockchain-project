import { ICalculateHash } from "../interface.export"
import { TCalculateHashParams } from "../types.exports"

export class Hash implements ICalculateHash {
  calculate(params: TCalculateHashParams): string {
    if (!params) throw new Error()

    const { index, previousHash, timestamp, data } = params
    const crypto = CryptoJS.SHA256(
      index + previousHash + timestamp + data
    ).toString()

    return crypto
  }
}