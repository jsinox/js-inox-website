import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'preview.html'), 'utf8');
const css = readFileSync(resolve(root, 'src/styles/global.css'), 'utf8');
const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
const hrefs = [...html.matchAll(/\bhref=["']#([^"']+)["']/g)].map((match) => match[1]);
const images = [...html.matchAll(/\bsrc=["'](public\/[^"']+)["']/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
const missingTargets = [...new Set(hrefs.filter((href) => !ids.includes(href)))];
const missingImages = images.filter((image) => !existsSync(resolve(root, image)));
const missingBraces = css.split('{').length - css.split('}').length;
const blockedIntegrations = ['fetch(', 'localStorage', 'sessionStorage', 'sendBeacon', 'wa.me', 'mailto:'].filter((term) => `${html}\n${css}`.includes(term));

const report = { ids: ids.length, internalLinks: hrefs.length, images: images.length, duplicates, missingTargets, missingImages, cssBraceBalance: missingBraces, blockedIntegrations };
console.log(JSON.stringify(report, null, 2));
if (duplicates.length || missingTargets.length || missingImages.length || missingBraces !== 0 || blockedIntegrations.length) process.exit(1);