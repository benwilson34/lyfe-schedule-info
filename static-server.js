import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import process from "process";
import express from "express";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
const staticBuildDirectory = path.join(__dirname, "build/client");
const PORT = 5775;

if (!fs.existsSync(staticBuildDirectory)) {
  console.error(
    `${staticBuildDirectory} not found! Did you run \`npm run build\`?`
  );
  process.exit(1);
}

app.use(
  express.static(staticBuildDirectory, {
    extensions: ["html"],
  })
);

app.listen(PORT, () => {
  console.log(`serving static build on http://localhost:${PORT}`);
});
