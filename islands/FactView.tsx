import { Fact } from "../components/Fact.model.tsx";
import { useEffect, useState } from "preact/hooks";

const API_URL = "http://localhost:8000/api/fact";

export default function FactView() {
  const [currFact, setFact] = useState<Fact | null>(null);
  const getNewFact = async () => {
    console.log("getting new fact");
    const resp = await fetch(API_URL);
    if (resp.status === 404) {
      setFact(null);
    }
    const data: Fact = await resp.json();
    setFact(data);
  };
  useEffect(() => {
    getNewFact();
  }, []);
  console.log(currFact);
  if (!currFact) {
    return (
      <div class="flex w-full">
        <p>loading ...</p>
      </div>
    );
  }
  return (
    <div class="flex flex-col w-full gap-4">
      <p className="place-self-center text-2xl">{currFact.title}</p>
      <div className="flex flex-row gap-4">
        {currFact.media_type == "image" &&
          <img src={currFact.url} className="w-96 h-64 object-cover" />}
        {currFact.media_type == "video" &&
          (
            <iframe className="w-96 h-64 object-cover" src={currFact.url}>
            </iframe>
          )}
        <div>
          <p className="text-base text-left">{currFact.explanation}</p>
          <div className="text-center">
          </div>
        </div>
      </div>
      <button
        className="w-36 px-4 place-self-center rounded-full bg-[#1E1B4B] text-2xl text-center"
        onClick={() => getNewFact()}
      >
        Reload
      </button>
    </div>
  );
}
