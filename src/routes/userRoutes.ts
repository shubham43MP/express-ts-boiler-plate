import { Router } from "express";
import {
  getUser,
  getUsersByDomain,
  getUsersPaginated,
  getTotalUsers,
  getManyUsers,
} from "../controllers/userController";

const router = Router();

router.get("/:id", getUser);
router.get("/", getManyUsers);
router.get("/domain/:domain", getUsersByDomain);
router.get("/paginated", getUsersPaginated);
router.get("/count", getTotalUsers);

export default router;
