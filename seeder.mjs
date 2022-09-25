import connectDB from "./db/connectDB.js";
import Show from "./db/Models/ShowModel.js";
import showData from "./data.js";

const importData = async () => {
  try {
    await connectDB();
    await Show.deleteMany({});
    await Show.insertMany(showData);
    console.log("Data Imported!");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await Show.deleteMany({});
    console.log("Data Destroyed!");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
