```javascript
//Correct usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("someObjectId")},{$inc:{"field":value}});
//Alternative solution using $set to initialize the field if it does not exist
db.collection('myCollection').updateOne({"_id":ObjectId("someObjectId")},{$set:{"field":0}, $inc:{"field":value}});
```