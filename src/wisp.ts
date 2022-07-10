import { Payment } from "../generated/Wisp/Wisp"
import { Payment as PaymentEntity } from "../generated/schema"

export function handlePayment(event: Payment): void {
  const entity = new PaymentEntity(event.params.index.toString());

  entity.publicKey = "0x" + event.params.publicKey.toHexString().slice(2).padStart(64, "0");
  entity.commitment = event.params.commitment;
  entity.encryptedData = event.params.encryptedData;
  entity.sender = event.transaction.from;
  entity.txHash = event.transaction.hash;
  entity.blockTimestamp = event.block.timestamp;

  entity.save();
}
