import { TBlock } from "@models/block.exports"
import { THash } from "@models/hash.exports"

export type TcalculateHashForBlock = {
  (block: TBlock): THash | Error
}
