import { Handlers } from "$fresh/server.ts";
import { Post } from "../components/Post.model.tsx";



export const handler: Handlers<Post | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/`+ctx.params.id);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const data: Post = await resp.json();
    return ctx.render(data);
  },
};


export default function getPost(props: any) {
  if(!props.data) return <h1 class="text-7xl text-red-400 text-center mt-56">Post not found</h1>
  return <div>Hello ! this is post {props.data.id} ! <br/>
    {props.data.body}
    </div>;
}
