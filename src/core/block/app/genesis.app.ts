import { Block, TCreateGenesisBlock } from "../../../models/block.exports"

const genesisBlcock = {
  index: 0,
  hash: "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7",
  previousHash: null,
  timestamp: 1465154705,
  data: "my genesis block!!",
}

export const createGenesisBlock: TCreateGenesisBlock = () => {
  return new Block().create(genesisBlcock)
}
