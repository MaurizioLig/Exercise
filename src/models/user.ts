import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: Number,
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  gender: { type: String, default: "" },
  avatar: { type: String, default: "" },
  birthday: { type: String, default: "" },
  isActive: { type: Boolean, default: false },
  description: { type: String, default: "" },
  lastAccess: {
    type: {
      mac: String,
      ip: String,
      userAgent: String,
    },
    default: {},
  },
});

export const User = mongoose.model("User", UserSchema, "User");
