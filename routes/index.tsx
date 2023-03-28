import { Head } from "$fresh/runtime.ts";
import FactView from "../islands/FactView.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nasa Fact App</title>
      </Head>
      <h1 className="text-center text-5xl">Nasa Fact App</h1>
      <div className="flex flex-col items-center justify-center text-center w-full h-[100vh]">
        <div className="w-3/4 h-3/4">
          <FactView/>
        </div>
      </div>
    </>
  );
}
