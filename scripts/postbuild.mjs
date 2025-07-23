import fs from 'fs';
import path from 'path';

// Copy index.html to 404.html for SPA routing
fs.copyFileSync(
  path.join('dist', 'index.html'),
  path.join('dist', '404.html')
);

// Create .nojekyll file
fs.writeFileSync(path.join('dist', '.nojekyll'), '');

console.log('Post-build steps completed successfully!');
