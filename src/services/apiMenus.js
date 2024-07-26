import supabase, { supabaseUrl } from "./supabase";

export async function getMenus() {
  const { data, error } = await supabase.from("menus").select("*");

  if (error) {
    console.error("");
    throw new Error("Menus could not find!");
  }
  return data;
}
