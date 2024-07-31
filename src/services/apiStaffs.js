import supabase, { supabaseUrl } from "./supabase";

export async function getStaffs() {
  const { data, error } = await supabase.from("staffs").select("*");

  if (error) {
    console.error(error);
    throw new Error("Staffs could not be loaded");
  }

  return data;
}
