import { Fact } from "../components/Fact.model.tsx";
import { useEffect, useState } from "preact/hooks";

const API_URL = "http://localhost:8000/api/fact";

export default function Fact() {
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
      <img src={currFact.url} className="w-1/2 h-1/2" />
      <div>
      <p className="text-sm text-left">{currFact.explanation}</p>
      <div className="text-center">
      <button className="border-4 border-indigo-700" onClick={() => getNewFact()}>Reload</button>  
      </div>
      </div>
      </div>
    </div>
  );
}
