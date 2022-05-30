import { NextFunction, Request, Response } from "express";

// Import services
import * as service from "../../services/user_service";
// Import controllers
import * as controller from "../../controllers/controller";
// Import types
import { UserDoc0, UserDoc1 } from "../../types";

export const retrieveHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result: UserDoc0[] = await service.getAllService();
    res.json("Processing data, it may take a minute to compute all the data");
    await controller.fillUser(result);
  } catch (err) {
    return next(err);
  }
};

export const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result: UserDoc1[] = await controller.getAll();
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const addListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = req.body;
    await controller.addList(data);
    res.json("ok");
  } catch (err) {
    return next(err);
  }
};

export const getByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;
    const result: UserDoc1 | null = await controller.getById(id);
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const updateUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = req.body;
    const id: string = req.params.id;
    const result = await controller.updateUser(id, data);
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

export const deleteUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const result = await controller.deleteUser(id);
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

// Utility for dev mode
export const deleteAllHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await controller.deleteAll();
    res.json(result);
  } catch (err) {
    return next(err);
  }
};
