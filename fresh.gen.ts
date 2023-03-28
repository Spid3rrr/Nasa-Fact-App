// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/fact.ts";
import * as $1 from "./routes/index.tsx";
import * as $$0 from "./islands/FactView.tsx";

const manifest = {
  routes: {
    "./routes/api/fact.ts": $0,
    "./routes/index.tsx": $1,
  },
  islands: {
    "./islands/FactView.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
