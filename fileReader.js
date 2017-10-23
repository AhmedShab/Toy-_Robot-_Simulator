const fs = require('fs');

const fileReader = () => {
  let contents;

  return {

    readFile: (file) => {

      try {
        contents = fs.readFileSync(file);

      } catch (err) {
        throw err.message;
      }

      return contents.toString();
    },
  };
};

module.exports = fileReader;
