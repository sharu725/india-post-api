import { json } from "@sveltejs/kit";

export const GET = async ({ fetch, setHeaders }) => {
  const res = await fetch("/savings/scss.json");
  const data = await res.json();
  setHeaders({
    "Access-Control-Allow-Origin": "*",
    "cache-control": "max-age=604800",
  });
  return json(data);
};
