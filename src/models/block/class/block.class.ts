import { ICreateBlock, TBlock } from "../../block.exports"

export class Block implements ICreateBlock {
  create(block: TBlock): TBlock {
    if (!block) throw new Error()
    return block
  }
}
