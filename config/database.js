const { MongoClient } = require('mongodb');

const client = new MongoClient(`mongodb://localhost:27017`)
 export const db = client.db("gradDB")
export const connectDB= async()=>{

  await client.connect().then(res=>{
    console.log(`DB connected ${res}`);
  }).catch(err=>{console.log(`fail connect ${err}`)}); 
}


