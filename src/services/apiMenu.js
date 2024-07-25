import supabase, { supabaseUrl } from "./supabase";

export async function getMenu() {
  // Make a request
  const { data, error } = await supabase.from("menus").select("*");

  if (error) {
    console.error(error);
    throw new Error("menu could not be loaded");
  }
}
