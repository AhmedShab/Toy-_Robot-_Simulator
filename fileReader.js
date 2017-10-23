const fs = require('fs');

const fileReader = () => {
  let contents;

  return {

    readFile: (file) => {

      try {
        contents = fs.readFileSync(file);
        return contents.toString();

      } catch (err) {
        console.log('Please provide a correct file input');
      }
    },
  };
};

module.exports = fileReader;
