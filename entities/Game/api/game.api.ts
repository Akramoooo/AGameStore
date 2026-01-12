import type { Game } from "../types/Game.type";

export const fetchGames = async (limit: number = 16): Promise<Game[]> => {
  const supabase = useSupabaseClient();

  const { data, error } = await supabase
    .from("games")
    .select(
      `
      *,
      company:companies (id, name, site),
      images:game_images(image),
      game_tags (
        tags (
          name,
          slug
        )
      )
    `
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  const games = data?.map((game: any) => ({
    ...game,
    images: game.images?.map((img: any) => img.image) || [],
    tags: game.game_tags?.map((gt: any) => gt.tags?.name) || [],
  })) as Game[];

  return games || [];
};

export const fetchHeroGames = async (): Promise<Game[]> => {
  const supabase = useSupabaseClient();

  const { data, error } = await supabase
    .from("games")
    .select(
      `
      *, 
      company:companies(*),
      game_tags (
        tags (name, slug)
      )
    `
    )
    .not("banner_url", "is", null)
    .limit(5);

  if (error) throw error;

  return data?.map((game: any) => ({
    ...game,
    images: game.images?.map((img: any) => img.image) || [],
    tags: game.game_tags?.map((gt: any) => gt.tags?.name) || [],
  })) as Game[];
};
