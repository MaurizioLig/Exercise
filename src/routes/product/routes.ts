import express from "express";
import {
  getUsersHandler,
  retriveHandler,
  addListHandler,
  getByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  deleteAllHandler,
} from "./handler";

// Init the router
const router = express.Router();

// API
router.get("/retrive-data", retriveHandler);
router.get("/users", getUsersHandler);
router.get("/users/:id", getByIdHandler);
router.post("/users", addListHandler);
router.patch("/users/:id", updateUserHandler);
router.delete("/users/:id", deleteUserHandler);
router.delete("/all", deleteAllHandler);

export default router;
