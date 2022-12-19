import { IError } from "../interface.exports"
import { TYPE, MESAGE, TError } from "../types.exports"

export class CatchError implements IError {
  public type: TError
  public param: any

  constructor(type: TError, error: any) {
    this.type = type
    this.param = error
  }
  mesage(): boolean | Error {
    if (this.type === TYPE.PARAM)
      throw new Error(
        `${MESAGE.ERROR_WITH} ${TYPE.PARAM}: ${this.param.toString()}`
      )

    if (this.type === TYPE.INVALID)
      throw new Error(
        `${MESAGE.ERROR_WITH} ${TYPE.INVALID}: ${this.param.toString()}`
      )

    return
  }
}
