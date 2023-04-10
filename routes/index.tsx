import { Head } from "$fresh/runtime.ts";
import FactView from "../islands/FactView.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nasa Fun Fact</title>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <div className="bg-[#1E1B4B] text-white ">
      <div className="rainfall w-full h-full absolute" />
      <h1 className="text-center text-5xl pt-6">Nasa Fact App</h1>
      <div className="flex flex-col items-center justify-center text-center w-full h-[100vh]">
        <div className="w-3/4 bg-[#47438e] z-10 p-6">
          <FactView/>
        </div>
      </div>
      </div>
    </>
  );
}
