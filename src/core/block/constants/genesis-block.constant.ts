import { TCreateGenesisBlock } from "../../../models/block.exports"
import { Block } from "../class.export"

const genesis = {
  index: 0,
  hash: "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7",
  previousHash: null,
  timestamp: 1465154705,
  data: "my genesis block!!",
}

const createGenesisBlock: TCreateGenesisBlock = () => {
  return new Block().create(genesisBlock)
}

export const genesisBlock = createGenesisBlock()
