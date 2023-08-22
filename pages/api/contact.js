import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !name ||
      !message ||
      !email.includes("@") ||
      name.trim() === "" ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.svdxxya.mongodb.net/?retryWrites=true&w=majority`;

    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Error connecting to server" });
      return;
    }

    const db = client.db(process.env.mongodb_database);

    let result;
    try {
      result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Error inserting to database" });
      return;
    }

    client.close();
    res.status(201).json({
      message: "Successfully stored message",
      messageSent: newMessage,
    });
  }
}

export default handler;
