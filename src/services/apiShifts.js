import supabase, { supabaseUrl } from "./supabase";

/*interface Shift {
  id: n
  created_at
  availability
  endShift:n
  startShift:n
  name
  image
}*/

export async function getShifts() {
  const { data, error } = await supabase.from("shifts").select("*");

  if (error) {
    console.error(error);
    throw new Error("Shifts could not be loaded");
  }

  return data;
}

export async function createShift(newShift) {
  const { data, error } = await supabase
    .from("shifts")
    .insert([newShift])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Shift could not be created");
  }

  return data;
}
