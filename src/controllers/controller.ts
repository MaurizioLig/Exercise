import { User } from "../models/user";
import { UserDoc0, UserDoc1 } from "../types";

// Import services
import * as service from "../services/user_service";

/* export const saveOnDB = async (array: UserDoc[]): Promise<void> => {
  for (const e in array) {
    const user = new User(array[e]);
    await user.save();
  }
}; */

export const getAll = async (): Promise<UserDoc1[]> => {
  const result = await User.find();
  return result;
};

export const addList = async (dataArray: UserDoc1[]): Promise<void> => {
  for (const e in dataArray) {
    const newUser = new User(dataArray[e]);
    await newUser.save();
  }
};

export const getById = async (id: string): Promise<UserDoc1 | null> => {
  const result = await User.findById(id);
  return result;
};

export const updateUser = async (id: string, data: any): Promise<UserDoc1> => {
  const result = await User.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const deleteUser = async (id: string): Promise<UserDoc1> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const fillUser = async (array: UserDoc0[]): Promise<void> => {
  for (const e in array) {
    const result = await service.getUserService(array[e].id.toString());
    let newUser = new User(result);
    await newUser.save();
  }
};

export const deleteAll = async (): Promise<void> => {
  await User.deleteMany();
};

export default {
  fillUser,
};
