import { NextFunction, Request, Response } from "express";
import {
  getUserById,
  getUsersByEmailDomain,
  getPaginatedUsers,
  getUserCount,
} from "../services/userService";
import logger from "../utils/logger";
import CustomException from "../utils/customException";

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    logger.info("Fetching user by id");
    const user = await getUserById(Number(id));
    if (!user) throw new CustomException({ error: "User not found", code: 404 });;
    res.json(user);
  } catch (error) {
    logger.error("Error fetching user by id: " + error);
    next()
  }
};

export const getUsersByDomain = async (req: Request, res: Response) => {
  const { domain } = req.params;
  try {
    const users = await getUsersByEmailDomain(domain);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const getUsersPaginated = async (req: Request, res: Response) => {
  const { page = 1, pageSize = 10 } = req.query;
  try {
    const users = await getPaginatedUsers(Number(page), Number(pageSize));
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const getTotalUsers = async (_req: Request, res: Response) => {
  try {
    const count = await getUserCount();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user count" });
  }
};
