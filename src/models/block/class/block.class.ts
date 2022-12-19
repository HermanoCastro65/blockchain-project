import { ICreateBlock, TBlock } from "../../block.exports"
import { ParamError } from "../../error.export"

export class Block implements ICreateBlock {
  create(block: TBlock): TBlock {
    if (!block) new ParamError(block).mesage()
    return block
  }
}
