const fileReader = require('./fileReader');
const parserFactory = require('./parser');

let parser = parserFactory();

const { readFile } = fileReader();

const runSimulator = () => {
  console.log('starting the game');

  let fileContents = readFile(process.argv[2]).toUpperCase().split('\n');

  fileContents.forEach(command => {
    parser.eval(command.trim());
  });
};

runSimulator();
