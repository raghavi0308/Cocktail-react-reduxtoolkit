// Prefer local asset if provided; you can replace with a remote .jpg/.png URL
const ADDISON_IMAGE_URL = "/images/addison.jpg";

export function getCocktailImageOverride(name) {
  if (!name) return null;
  const normalized = String(name).trim().toLowerCase();
  // Match exact or any name containing "addison"
  if (normalized === "addison cocktail" || normalized.includes("addison")) {
    return ADDISON_IMAGE_URL;
  }
  return null;
}


