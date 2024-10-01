/* eslint-disable no-console */
const fs = require('fs');

async function moveFile() {
  const [oldPath, newPath] = process.argv.slice(2);

  if (!oldPath || !newPath) {
    console.error('Please provide two params');

    return;
  }

  fs.rename(oldPath, newPath, (error) => {
    if (error) {
      console.error(error);
    }
  });
}

moveFile();
