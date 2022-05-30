import type { JSONSchemaType } from "ajv";
import { UserDoc1 } from "../../types/models";

export const reqBodyAddListSchema: JSONSchemaType<UserDoc1> = {
  type: "object",
  properties: {
    id: { type: "number" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    gender: { type: "string" },
    avatar: { type: "string" },
    birthday: { type: "string" },
    isActive: { type: "boolean" },
    description: { type: "string" },
    lastAccess: {
      type: "object",
      properties: {
        mac: { type: "string" },
        ip: { type: "string" },
        userAgent: { type: "string" },
      },
      required: [],
      additionalProperties: false,
    },
  },
  required: [],
  additionalProperties: false,
};
