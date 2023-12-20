const fs = require("fs");

const cleanFile = (filePath) => {
  // read the file using fs library.
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw new Error("Error Reading the file ");

    // beautify the file.
    const cleanedFille = data.replace(/\s+/g, " ");

    // rewrite the file
    fs.writeFile(filePath, cleanedFille, (err) => {
      if (err) throw new Error("Error Writing the file");
      console.log("File updated successfully");
    });
  });
};
