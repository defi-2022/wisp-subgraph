import { Payment } from "../generated/Wisp/Wisp"
import { Payment as PaymentEntity } from "../generated/schema"

export function handlePayment(event: Payment): void {
  const entity = new PaymentEntity(event.params.index.toHex());

  entity.publicKey = event.params.publicKey.toHexString();
  entity.commitment = event.params.commitment;
  entity.encryptedData = event.params.encryptedData;
  entity.sender = event.transaction.from.toHexString()

  entity.save();
}
