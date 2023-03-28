import { Head } from "$fresh/runtime.ts";
import Fact from "../islands/Fact.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nasa Fact App</title>
      </Head>
      <h1 className="text-center text-5xl">Nasa Fact App</h1>
      <div className="flex flex-col items-center justify-center text-center w-full h-[100vh]">
        <div className="w-3/4 h-3/4">
          <Fact/>
        </div>
      </div>
    </>
  );
}
