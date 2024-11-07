import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    game_name: {
      type: String,
      require: true,
    },
    price_primary: {
      type: Number,
      require: true,
    },
    price_secondary: {
      type: Number,
      require: false,
    },
    is_offer: {
      type: Boolean,
      require: true,
    },
    percentage_offer: {
      type: Number,
      require: false,
    },
    game_stock: {
      type: Number,
      require: true,
    },
    game_min_stock: {
      type: Number,
      require: false,
    },
    game_gender: {
      type: String,
      require: true,
    },
    game_console: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Game = mongoose.model("Game", gameSchema);
export default Game;
