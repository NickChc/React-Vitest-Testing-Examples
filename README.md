## DOCS

**setup**

-- run "npm i -D vitest @vitest/ui" --
-- run "npm i -D jsdom" --
-- run "npm i -D @testing-library/react @testing-library/jest-dom @testing-library/user-event" --

-- or just run "npm i -D vitest @vitest/ui @tstring-library/react @testing-library/jest-dom @testing-library/user-event" --

-- change vite.config.ts to following :
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
test: {
globals: true,
environment: "jsdom",
css: true,
setupFiles: ["src/tests/setup.ts"],
},
});

--

-- add this into tsconfig.app.json:
"types": ["vitest/globals"],
--

-- add scripts:
"test": "vitest",
"test:ui": "vitest --ui"
--

-- create a setup.ts file in tests dir and add this there:

import "@testing-library/jest-dom";

**usage**

-- run "npm run test or npm run test:ui " --
