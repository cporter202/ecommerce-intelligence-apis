/** Sync the focused Apify and CoreClaw catalogs used by this repository. */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'repo.config.json'), 'utf8'));

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'API-directory-sync/1.0' } }, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} while fetching ${url}`));
        resolve(body);
      });
    }).on('error', reject);
  });
}

function writeIfChanged(filePath, content) {
  const previous = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null;
  if (previous === content) return false;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

async function syncOne(url, destination, heading) {
  try {
    const content = await fetchText(url);
    const stamped = `<!-- Synced from ${url} -->\n\n${content.trim()}\n`;
    const changed = writeIfChanged(path.join(ROOT, destination), stamped);
    console.log(`${heading}: ${changed ? 'updated' : 'unchanged'}`);
  } catch (error) {
    if (fs.existsSync(path.join(ROOT, destination))) {
      console.warn(`${heading}: ${error.message}; keeping the existing catalog`);
      return;
    }
    throw error;
  }
}

async function main() {
  await syncOne(config.megaListSource, 'catalog/README.md', 'Apify catalog');
  await syncOne(config.coreclawSource, 'featured/coreclaw.md', 'CoreClaw catalog');
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});

