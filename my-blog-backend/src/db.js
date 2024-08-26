import { MongoClient } from "mongodb";
let db;

async function ConnectToDb(cb) {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zlw5w.mongodb.net/`
  );
  await client.connect();
  db = client.db("react-blog-db");
  cb();
}

export { ConnectToDb, db };
