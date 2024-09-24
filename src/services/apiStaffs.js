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
  const imageName = `${Math.random()}-${newStaff.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/staffs/${imageName}`;

  const { data, error } = await supabase
    .from("staffs")
    .insert({ ...newStaff, image: imagePath });

  if (error) {
    console.error(error);
    throw new Error("Staffs could not be created");
  }

  const { error: storageError } = await supabase.storage
    .from("staffs")
    .upload(imageName, newStaff.image);
  if (storageError) {
    await supabase.from("staffs").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Staff image could not be uploaded and staff is not created"
    );
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
