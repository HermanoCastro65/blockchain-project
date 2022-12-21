import { TBlock, TCreateGenesisBlock } from "../../../models/block.exports"
import { Block } from "../class.export"
import dotenv from "dotenv"
import { CatchError } from "../../error/class.export"
import { TYPE } from "../../../models/error.exports"

dotenv.config()
const hash = process.env.GENESIS_HASH
const timestamp = Number(String(process.env.GENESIS_TIMESTAMP))
const data = process.env.GENESIS_DATA

const genesis = {
  hash,
  timestamp,
  data,
}

const createGenesisBlock: TCreateGenesisBlock = (genesis) => {
  if (!genesis) return new CatchError(TYPE.PARAM, genesis).mesage()

  genesis.index = 0
  genesis.previousHash = null

  return new Block().create(genesis as TBlock)
}

export const genesisBlock = createGenesisBlock(genesis)
