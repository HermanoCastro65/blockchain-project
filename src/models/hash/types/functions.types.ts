import { TBlock } from "../../block.exports"
import { THash } from "./hash.types"

export type TcalculateHashForBlock = {
  (block: TBlock): THash | Error
}
