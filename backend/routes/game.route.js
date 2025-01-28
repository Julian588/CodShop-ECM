import express from "express";
import {
  createGame,
  deleteGame,
  editGame,
  getGames,
} from "../controllers/game.controller.js";

const router = express.Router();

router.get("/", getGames);
router.post("/", createGame);
router.put("/:id", editGame);
router.delete("/:id", deleteGame);

export default router;
