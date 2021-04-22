const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

console.log(id.id)

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            return console.log(error)
        }

        const db = client.db(databaseName)

        // db.collection('users').insertOne(
        //     {
        //         _id: id,
        //         name: 'Vikram',
        //         age: '50',
        //     },
        //     (error, results) => {
        //         if (error) return console.log(error)
        //
        //         console.log(results.ops)
        //     }
        // )
        //
        // db.collection('users').insertMany(
        //     [
        //         {
        //             name: 'Jen',
        //             age: '20',
        //         },
        //         {
        //             name: 'Gunther',
        //             age: 27,
        //         },
        //     ],
        //     (error, result) => {
        //         if (error) return console.log(error)
        //
        //         console.log(result.ops)
        //     }
        // )

        // db.collection('tasks').insertMany(
        //     [
        //         {
        //             description: 'learning',
        //             completed: false,
        //         },
        //
        //         {
        //             description: 'eating',
        //             completed: true,
        //         },
        //         {
        //             description: 'sleeping',
        //             completed: false,
        //         },
        //     ],
        //     (error, results) => {
        //         if (error) console.log(error)
        //
        //         console.log(results.ops)
        //     }
        // )

        // just
    }
)
