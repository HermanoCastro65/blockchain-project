import { ICreateBlock, TBlock } from "../../../models/block.exports"
import { TYPE } from "../../../models/error.exports"
import { CatchError } from "../../error/class.export"

export class Block implements ICreateBlock {
  create(block: TBlock): TBlock {
    if (!block) new CatchError(TYPE.PARAM, block).mesage()
    return block
  }
}
