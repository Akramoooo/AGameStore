import type { Game } from "../types/Game.type";

export const fetchGames = async (): Promise<Game[]> => {
  const supabase = useSupabaseClient();

  const { data, error } = await supabase
    .from("games")
    .select("*")
    .returns<Game[]>();

  if (error) throw error;

  return data || [];
};
