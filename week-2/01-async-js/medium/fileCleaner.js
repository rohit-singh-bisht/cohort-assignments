const fs = require("fs");

const cleanFile = (filePath) => {
  // read the file using fs library.
  const file = fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw new Error("Error Reading the file ");
    const cleanedFille = data.replace(/\s+/g, " ");
    fs.writeFile(filePath, cleanFile, (err) => {
      if (err) throw new Error("Error Writing the file");
      console.log("File updated successfully");
    });
  });
};
