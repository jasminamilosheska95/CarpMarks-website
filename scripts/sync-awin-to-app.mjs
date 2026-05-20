import { copyFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '../src/data/awin-products.json');
const dest = resolve(__dirname, '../../CarpMarks/data/awin-products.json');

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log('Synced awin-products.json → mobile app/data/');
