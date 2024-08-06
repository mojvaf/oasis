import supabase, { supabaseUrl } from "./supabase";

export async function getStaffs() {
  const { data, error } = await supabase.from("staffs").select("*");

  if (error) {
    console.error(error);
    throw new Error("Staffs could not be loaded");
  }

  return data;
}

export async function createStaffs(newStaff) {
  const { data, error } = await supabase.from("staffs").insert([newStaff]);
  if (error) {
    console.error(error);
    throw new Error("Staffs could not be loaded");
  }

  return data;
}

export async function deleteStaffs(id) {
  const { data, error } = await supabase.from("staffs").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Staffs could not be deleted");
  }

  return data;
}
