import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect("mongodb+srv://2111rohan:DaM81JgMg6V17e5m@rs-cluster.8nlnyqz.mongodb.net/chatbot?retryWrites=true&w=majority"); // process.env.MONGODB_URL
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

// for security reasons,
async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
