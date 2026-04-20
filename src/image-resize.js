import sharp from "sharp";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("__dirname:", `${__dirname}/assets/images`);

const imagesToResize = `${__dirname}/assets/images`;

fs.readdirSync(imagesToResize).forEach((file) => {
  sharp(`${imagesToResize}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${imagesToResize}/${file}-small.jpg`);
});
