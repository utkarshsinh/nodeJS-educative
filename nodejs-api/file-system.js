const fs = require("fs").promises;

// Write your solution here
const writeFile = async (path, value) => {
    try {
        await fs.writeFile(path, value);
        console.log("Written successfully");
      } catch (error) {
        console.error(error);
      }
    };


writeFile("./test.txt", "hello world"); // Writing "hello world" to the file

const appendFile = async (path, data) => {
    try {
      await fs.appendFile(path, data);
    } catch (error) {
      console.error(error);
    }
  };
appendFile("./test.txt", "appending another hello world")

const readFile = async (path) => {
  try {
    const contents = await fs.readFile(path, "utf8");
    console.log(contents);
  } catch (error) {
    console.error(error);
  }
};

readFile("./test.txt"); // Display "hello world"