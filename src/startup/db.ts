import mongoose from "mongoose";
import config from "config";

const RECONNECT_TIMEOUT = 5000;

// Handle connection error then disconnect all connections
mongoose.connection.on("error", (error) => {
  // Log the error
  console.error("Error in MongoDb connection:", error);
  // Disconnect all connections
  mongoose.disconnect();
});

// Handle mongoose disconnections. Then try to reconnect
mongoose.connection.on("disconnected", function () {
  // Convert the reconnect timeout in seconds
  const timeout = RECONNECT_TIMEOUT / 1000;

  // Get the current date and time in UTC
  const disconnectionDate = new Date().toISOString();

  // Log the disconnection
  console.log(
    `MongoDB disconnected! Trying to reconnect after ${timeout} sec...`,
    disconnectionDate
  );

  // After RECONNECT_TIMEOUT milliseconds try to reconnect to db
  setTimeout(connection, RECONNECT_TIMEOUT);
});

export const connection = async () => {
  if (!config.has("DB_CONNECTION_URI")) {
    throw new Error("ERROR: Database connection string is not defined!");
  }

  const connection = await mongoose.connect(config.get("DB_CONNECTION_URI"));

  console.log("Connected to database");
  return connection;
};
