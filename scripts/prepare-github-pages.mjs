import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const projectRoot = process.cwd();
const source = join(projectRoot, 'dist', 'client');
const output = join(projectRoot, 'out');
const basePath = process.env.BASE_PATH ?? '';

if (!existsSync(join(source, 'index.html'))) {
  throw new Error('Static export is missing dist/client/index.html');
}

rmSync(output, { recursive: true, force: true });
cpSync(source, output, { recursive: true });

function collectHtml(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectHtml(path) : entry.name.endsWith('.html') ? [path] : [];
  });
}

for (const file of collectHtml(output)) {
  const pathFromOutput = relative(output, file).replaceAll('\\', '/');
  if (pathFromOutput === 'index.html' || pathFromOutput === '404.html') continue;

  const cleanRoute = pathFromOutput.slice(0, -'.html'.length);
  const destination = join(output, cleanRoute, 'index.html');
  mkdirSync(dirname(destination), { recursive: true });
  renameSync(file, destination);
}

const cloudflareHeaders = join(output, '_headers');
if (existsSync(cloudflareHeaders)) unlinkSync(cloudflareHeaders);

writeFileSync(join(output, '.nojekyll'), '');
writeFileSync(join(output, 'CNAME'), 'www.downscommunityconsulting.co.uk\n');

if (basePath) {
  for (const file of collectHtml(output)) {
    let html = readFileSync(file, 'utf8');
    html = html.replaceAll('href="/', `href="${basePath}/`);
    html = html.replaceAll('src="/', `src="${basePath}/`);
    writeFileSync(file, html);
  }
}
