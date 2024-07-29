import supabase, { supabaseUrl } from "./supabase";

export async function getMenus() {
  const { data, error } = await supabase.from("menus").select("*");

  if (error) {
    console.error("");
    throw new Error("Menus could not find!");
  }
  return data;
}

export async function deleteMenu(id) {
  const { data, error } = await supabase.from("menus").delete().eq("id", id);
  if (error) {
    console.error("");
    throw new Error("Menus could not be deleted!");
  }
  return data;
}
