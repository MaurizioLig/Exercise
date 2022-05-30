import Ajv from "ajv";
const ajv = new Ajv({ allErrors: true });
// Import schemas
import * as schemas from "./userSchema";

// Create validation functions
export const validateAddList = ajv.compile(schemas.reqBodyAddListSchema);
