import { json } from "@sveltejs/kit";

export const GET = async ({ fetch, setHeaders }) => {
  const res = await fetch("/savings/sb.json");
  const data = await res.json();
  setHeaders({
    "Access-Control-Allow-Origin": "*",
  });
  return json(data);
};
