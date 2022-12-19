import { ParamError } from "../../../error/param.export"
import { ICreateBlock, TBlock } from "../../block.exports"

export class Block implements ICreateBlock {
  create(block: TBlock): TBlock {
    if (!block) new ParamError(block).mesage()
    return block
  }
}
