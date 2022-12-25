import { TBlock } from "@models/block.exports"

type TGenesisBlock = TBlock

export type TCreateGenesisBlock = {
  (param: Partial<TBlock>): TGenesisBlock | Error
}
