import { ICreateBlock, TBlock } from "../../block.exports"

export class Block implements ICreateBlock {
  create(block: TBlock): TBlock {
    return block
    throw new Error()
  }
}
