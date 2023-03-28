import { HandlerContext } from "$fresh/server.ts";
import { Fact } from "../../components/Fact.model.tsx";

//TODO: .env for api key
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=AgKwrvmLriBfbeCyj6dXgV29s5bGRwOug8ZYVb3j&count=1'

export const handler = async (_req: Request, ctx: HandlerContext): Promise<Response> => {
    const resp = await fetch(API_URL);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const data: Fact[] = await resp.json();
    return Response.json(data[0]);
};
