type TError = any

interface IError {
  mesage(): string
}

export class ParamError implements IError {
  public param: TError

  constructor(error: TError) {
    this.param = error
  }

  mesage(): string {
    const msg = this.param.toString()
    throw new Error(`Error with param: ${msg}`)
  }
}
