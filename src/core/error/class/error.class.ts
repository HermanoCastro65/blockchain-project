import { IError, TError, MESAGE, TYPE } from "../../../models/error.exports"

export class CatchError implements IError {
  public type: TError
  public param: any

  constructor(type: TError, error: any) {
    this.type = type
    this.param = error
  }
  mesage(): Error {
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
