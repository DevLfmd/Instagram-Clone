import { MongoClient } from 'mongodb';

(async () => {
    const connection = await MongoClient.connect('mongodb://localhost', { useUnifiedTopology: true });
    const db = connection.db('instagram');
    db.createCollection( "users", {
        validator: { $jsonSchema: {
            bsonType: "object",
            required: [],
            properties: {}
        }}
    });
})();