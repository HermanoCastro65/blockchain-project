import { TBlock } from "./block.types"

type TGenesisBlock = TBlock

export type TCreateGenesisBlock = {
  (param: Partial<TBlock>): TGenesisBlock | Error
}
