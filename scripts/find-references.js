const fs = require('fs');
const path = require('path');

const root = process.cwd();
const patterns = ['CyberGrid','ScanLine','CircuitPattern','TerminalWindow','FloatingElements','LoadingSpinner','MatrixRain','Toaster','useIsMobile','getCurrentUser'];
const exts = ['.ts','.tsx','.js','.jsx','.mjs','.json','.css','.md'];

function walk(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.next' || e.name === '.git') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, fileList);
    else fileList.push(full);
  }
  return fileList;
}

const files = walk(root).filter(f => exts.includes(path.extname(f)));
let found = false;
for (const p of patterns) {
  console.log(`=== ${p} ===`);
  for (const f of files) {
    try {
      const txt = fs.readFileSync(f, 'utf8');
      const lines = txt.split(/\r?\n/);
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(p)) {
          console.log(`${f}:${i+1}: ${lines[i].trim()}`);
          found = true;
        }
      }
    } catch (e) {
      // ignore binary or unreadable files
    }
  }
  if (!found) console.log('(no matches)');
  found = false;
}
