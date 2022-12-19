import { ICreateBlock, TBlock } from "../../block.exports"
import { CatchError, TYPE } from "../../error.export"

export class Block implements ICreateBlock {
  create(block: TBlock): TBlock {
    if (!block) new CatchError(TYPE.PARAM, block).mesage()
    return block
  }
}
