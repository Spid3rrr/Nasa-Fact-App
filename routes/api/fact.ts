import "https://deno.land/std@0.184.0/dotenv/load.ts";

import { HandlerContext } from "$fresh/server.ts";
import { Fact } from "../../components/Fact.model.tsx";

const API_KEY = Deno.env.get("API_KEY");
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`;

export const handler = async (_req: Request, ctx: HandlerContext): Promise<Response> => {
    const resp = await fetch(API_URL);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const data: Fact[] = await resp.json();
    return Response.json(data[0]);
};
