import { URL } from "../../constants/api.js";

export async function getVenues() {
  const url = `${URL}venues`;

  const response = await fetch(url);
  const json = await response.json();
  console.log(json);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Fetching venues failed");
  }

  return json;
}
