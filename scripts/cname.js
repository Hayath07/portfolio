const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const content = args.join('\n');
const filePath = './out/CNAME';
const dirPath = path.dirname(filePath);

/**
 * Add CNAME to the file
 * All the args are joined by new line in [content]
 * and added to the [filePath]
 * 
 * node scripts/cname.js domain1 domain2 domain3
 * i.e.
 * node scripts/cname.js hayathmohamamd.com www.hayathmohammad.com
 */
console.log("Creating CNAME...");

// Ensure the directory exists
fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating directory:", err);
    return;
  }

  // Write the CNAME file
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${filePath} created`);
      console.log(`Domains added:\n${content}`);
    }
  });
});