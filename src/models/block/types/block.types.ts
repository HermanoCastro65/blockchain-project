export type TBlock = {
  index: number
  hash: string
  previousHash: string
  timestamp: number
  data: string
}

export type TCreateBlockParams = TBlock
export type TCreateBlockReturn = TBlock
