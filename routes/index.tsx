import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { Post } from "../components/Post.model.tsx";

export const handler: Handlers<Post[] | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const data: Post[] = await resp.json();
    return ctx.render(data);
  },
};


export default function Home(props : any) {
  return (
    <>
      <Head>
        <title>Posts App</title>
      </Head>
      <div >
        <h1 className="text-center text-5xl"> Hello world ! let's see some blog posts</h1>
        <ul>
        {props.data.map((post: Post) => <li className="text-xs"><a href={"/"+post.id}>{post.id} : {post.title}</a></li>)}
        </ul>
      </div>
    </>
  );
}
