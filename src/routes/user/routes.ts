import express from "express";

// Import middlewares
import { validateBody } from "../../middleware";

// Import validation functions
import { validateAddList } from "../../validation";

import {
  getUsersHandler,
  retrieveHandler,
  addListHandler,
  getByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  deleteAllHandler,
} from "./handler";

// Init the router
const router = express.Router();

// API
router.get("/retrive-data", retrieveHandler);
router.get("/users", getUsersHandler);
router.get("/users/:id", getByIdHandler);
router.post("/users", validateBody(validateAddList), addListHandler);
router.patch("/users/:id", updateUserHandler);
router.delete("/users/:id", deleteUserHandler);
router.delete("/all", deleteAllHandler);

export default router;
