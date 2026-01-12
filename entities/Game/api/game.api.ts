import type { Game } from "../types/Game.type";

export const fetchGames = async (limit: number = 12): Promise<Game[]> => {
  const supabase = useSupabaseClient();

  const { data, error } = await supabase
    .from("games")
    .select(
      `
      *,
      company:companies (id, name, site),
      images:game_images(image)
    `
    )
    .order("created_at", { ascending: false })
    .limit(limit)
    .returns<Game[]>();

  const games = data?.map((game) => ({
    ...game,
    images: game.images?.map((img: any) => img.image),
  })) as Game[];

  if (error) throw error;

  return games || [];
};
