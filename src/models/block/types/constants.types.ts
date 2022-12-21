import { TBlock } from "./block.types"

type TGenesisBlock = TBlock

export type TCreateGenesisBlock = {
  (): TGenesisBlock
}
