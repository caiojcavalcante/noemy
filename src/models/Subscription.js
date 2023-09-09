import { model, Schema, models } from "mongoose";

const SubscriptionSchema = new Schema(
  {
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Subscription =
  models?.Subscription || model("Subscription", SubscriptionSchema);
