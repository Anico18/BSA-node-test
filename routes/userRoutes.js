import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
// GET /api/users/
router.get('/', responseMiddleware, async (req, res) => {
  await userService.getAllUsers(req, res);
});

// GET /api/users/:id
router.get('/:id', responseMiddleware, async (req, res) => {
  await userService.getUserById(req, res);
});

// POST /api/users
router.post('/', createUserValid, responseMiddleware, async (req, res) => {
  await userService.createUser(req, res);
});

// PUT /api/users/:id
router.put('/:id', updateUserValid, responseMiddleware, async (req, res) => {
  await userService.updateUser(req, res);
});

// DELETE /api/users/:id
router.delete('/:id', responseMiddleware, async (req, res) => {
  await userService.deleteUser(req, res);
});

export { router };
