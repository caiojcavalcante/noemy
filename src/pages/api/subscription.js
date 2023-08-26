import { mongooseConnect } from "@/lib/mongoose";
import { Subscription } from "@/models/Subscription";

export default async function handle(req, res) {
  await mongooseConnect();

  const { name, email, phone } = req.body;

  const subscription = new Subscription({
    name,
    email,
    phone,
  });

  await subscription.save();

  res.status(200);
}
