import { model, Schema, models } from "mongoose";

const SubscriptionSchema = new Schema(
  {
    name:  {type: String, required: true},  
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Subscription =
  models?.Subscription || model("Subscription", SubscriptionSchema);