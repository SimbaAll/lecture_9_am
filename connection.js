// import { MongoClient } from "mongodb";

// const url = "mongodb://localhost:27017/"
// const client = new MongoClient(url)
// const DBName = "Lecture_9_AM"

// async function DBConnection() {
//     var result = await client.connect()
//     let db = result.db(DBName)
//     return db.collection('users')
// }

// export default DBConnection

import mongoose from "mongoose";

const url = "mongodb+srv://simbaall208:IKbLJ5U2fO4XQs3w@cluster0.hfj7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose.set("strictQuery", false)
export default mongoose.connect(url)