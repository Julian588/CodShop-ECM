import Game from "../models/game.model.js";
import mongoose from "mongoose";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find({});
    res.status(200).json({ success: true, data: games });
  } catch (error) {
    console.log("Error in fetching games", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createGame = async (req, res) => {
  const game = req.body;

  if (
    !game.game_name ||
    !game.price_primary ||
    !game.stock ||
    !game.game_gender ||
    !game.game_console
  ) {
    return { success: false, message: "Por favor llenar todo los campos" };
  }
  const newGame = new Game(game);

  try {
    await newGame.save();
    res.status(201).json({ success: true, data: newGame });
  } catch (error) {
    console.error("Error in Create Game", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const editGame = async (req, res) => {
  const { id } = req.params;
  const game = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Game not found" });
  }

  try {
    const updatedGame = await Game.findByIdAndUpdate(id, game, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedGame });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteGame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Game not found" });
  }

  try {
    await Game.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Game Deleted" });
  } catch (error) {
    console.error("Error in deleting a game", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
