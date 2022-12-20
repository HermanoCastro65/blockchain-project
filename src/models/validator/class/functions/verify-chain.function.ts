import { createGenesisBlock, TBlock } from "../../../block.exports"
import { CatchError, TYPE } from "../../../error.export"
import { Validator } from "../validator.class"

export const verifyChain = (blockchain: TBlock[]) => {
  const isValidGenesis = (block: TBlock): boolean => {
    return JSON.stringify(block) === JSON.stringify(createGenesisBlock())
  }

  if (!isValidGenesis(blockchain[0])) {
    return new CatchError(TYPE.INVALID, blockchain).mesage()
  }

  for (let i = 1; i < blockchain.length; i++) {
    const compare = {
      newBlock: blockchain[i],
      previousBlock: blockchain[i - 1],
    }
    if (new Validator().isValidNewBlock(compare)) {
      return new CatchError(TYPE.INVALID, blockchain).mesage()
    }
  }

  return true
}
