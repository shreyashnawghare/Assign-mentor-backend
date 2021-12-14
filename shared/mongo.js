const { MongoClient } = require("mongodb");
MONGODB_URL =
  "mongodb+srv://shreyashatlas:atlas123@cluster0.xzuh7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MONGODB_NAME = "Student-Mentor";
const client = new MongoClient(MONGODB_URL);

const mongo = {
  db: null,

  async connect() {
    await client.connect();
    console.log("Connected to Mongo...");

    this.db = client.db(MONGODB_NAME);
    console.log(`'${MONGODB_NAME}' database is selected`);
  },
};

module.exports = mongo;
