const fs = require("fs");
const path = require("path");

const directory = "../Ajimal14.github.io";
const git = "../Ajimal14.github.io/.git";

const deleteFolderRecursive = function (directoryPath) {
if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file, index) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
          if(curPath !== git){
           console.log(curPath);
           deleteFolderRecursive(curPath);
       }
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    if(directoryPath !== directory && directoryPath !== 'git'){
        fs.rmdirSync(directoryPath);
    }
  }
};

deleteFolderRecursive(directory)