# Toy Robot Simulator

A command line robot simulator written in Javascript (Node.js).

## Description

* The applicaton is a simulaton of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
* There are no other obstructons on the table surface.
* The robot is free to roam around the surface of the table, but must be prevented from falling to destructon. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

* The applicaton can read the following commands:

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```
* `PLACE` will put the toy robot on the table in positon X,Y and facing NORTH, SOUTH, EAST or WEST.

* `MOVE` will move the toy robot one unit forward in the directon it is currently facing.

* `LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified directon without changing the positon of the robot.

* `REPORT` will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.

### Constraints

The toy robot cannot fall off the table during movement. This also includes the inital placement of the toy robot. Any move that would cause the robot to fall will be ignored.

### Text file format example

Your file should look like the following examples:

```
PLACE 0,0,NORTH
MOVE
REPORT
```

```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
```

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project was built using `Node.JS version 8.6.0`. You need to have version 8 and above in order to run it. It was developed and tested using `Ubuntu 16.04.3 LTS 64-bit` 

You will need the following dependency for testing:

```
Mocha
```

### Installing

`cd Toy_Robot_Simulator && npm install`

## Running the tests

After installing the project, run `npm start [myInstruction.txt]`

`e.g: npm start instruction.txt`

To run the test, run `npm test` and it will run everything. Should fail one test for incorrect text file format case.

## Built With

* [Node.js](https://nodejs.org/docs/v8.6.0/api/)
* [Mocha](https://mochajs.org/) - Test framework


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
