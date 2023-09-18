const mongoose = require("mongoose");
// const socket = require("socket.io");
const dotenv = require("dotenv");

// process.on("uncaughtException", (err) => {
//   console.log("UNCAUGHT EXCEPTION! 💥 Shutting down.....");
//   console.log(err.name, err.message);
//   process.exit(1);
// });

dotenv.config();
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => console.log("DB successfully connected"));

const port = process.env.PORT || 5000;

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// process.on("unhandledRejection", (err) => {
//   console.log("UNHANDLED REJECTION! 💥 Shutting down.....");
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });
