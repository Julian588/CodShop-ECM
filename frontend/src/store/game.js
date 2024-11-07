import { create } from "zustand";

export const useGameStore = create((set) => ({
  games: [],
  setGames: (games) => ({ games }),
  createGame: async (newGame) => {
    if (
      !newGame.game_name ||
      !newGame.price_primary ||
      !newGame.stock ||
      !newGame.game_gender ||
      !newGame.game_console
    ) {
      return { success: false, message: "Por favor llenar todo los campos" };
    }

    const res = await fetch("/api/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame),
    });
    const data = await res.json();
    set((state) => ({ games: [...state.games, data.data] }));

    return { success: true, message: "Juego creado exitosamente" };
  },
  fetchProducts: async () => {
    const res = await fetch("/api/games");
    const data = await res.json();

    set({ games: data.data });
  },
  deleteProduct: async (gid) => {
    const res = await fetch(`/api/games/${gid}`, { method: "DELETE" });
    const data = await res.json();

    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      games: state.games.filter((game) => game._id !== gid),
    }));
    return { success: true, message: data.message };
  },
  updateProduct: async (gid, updatedProduct) => {
    const res = await fetch(`/api/games/${gid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      games: state.games.map((game) => (game._id === gid ? data.data : game)),
    }));
  },
}));
