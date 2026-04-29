import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  //https://dpdlxqvyothcxqcsibqo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  console.log(newCabin.image);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  console.log(imageName);
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1) Create / edit cabin
  let query = supabase.from("cabins");

  // const { data, error } = await supabase
  //   .from("cabins")
  //   .insert([{ ...newCabin, image: imagePath }])
  //   .select()
  //   .single();

  // A) CREATE new Cabin

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT existing Cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2) Upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .update(imageName, newCabin.image);

  // 3 Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabins image could not be uploaded. Cabin is not created");
  }

  return data;
}
