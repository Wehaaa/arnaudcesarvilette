#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function scan() {
  const issues = [];
  const dir = process.cwd();
  
  // Scan des fichiers
  function scanFiles(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      if (fs.statSync(filePath).isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanFiles(filePath);
        return;
      }
      
      if (!['.js', '.jsx', '.ts', '.tsx'].some(ext => file.endsWith(ext))) return;
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check URLs
      const urls = content.match(/(http|https):\/\/[^\s"']+/g) || [];
      urls.forEach(url => {
        if (url.includes('localhost')) {
          issues.push(`URL locale dans ${filePath}: ${url}`);
        }
      });
      
      // Check imports
      const imports = content.match(/from\s+['"]\..*['"]/g) || [];
      imports.forEach(imp => {
        const importPath = imp.replace(/from\s+['"]/g, '').replace(/['"]$/, '');
        const fullPath = path.join(path.dirname(filePath), importPath);
        
        if (!fs.existsSync(fullPath) && !fs.existsSync(fullPath + '.js') && !fs.existsSync(fullPath + '.tsx')) {
          issues.push(`Import invalide dans ${filePath}: ${importPath}`);
        }
      });
    });
  }

  scanFiles(dir);
  
  // Affichage
  if (issues.length === 0) {
    console.log('✅ Aucun problème détecté');
  } else {
    console.log(`❌ ${issues.length} problèmes trouvés:`);
    issues.forEach(issue => console.log(`- ${issue}`));
    process.exit(1);
  }
}

scan();