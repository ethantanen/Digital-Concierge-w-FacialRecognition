/*
* Creates a bucket, collection, and table with
* the same name.
*/

// Custom modules
const s3 = require('../utilities/s3Utilities')
const ddb = require('../utilities/dynamoDBUtilities')
const rk = require('../utilities/rekognitionUtilities')

// Shared name
name = process.env.NAME

console.log('Setting up Calvin using name: %s', name)
setupSystem()
/*
 * Create necessary storage containers
 */

function setupSystem() {

  // bucket for which put operation triggers lambda
  p1 = s3.createBucket(name)

  // create table to store users information
  p2 = ddb.createTable(name,"USER_ID")

  // create collection for indexed faces
  p3 = rk.createCollection(name)


  Promise.all([p1, p2, p3])
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log("Couldn't build system. Name may be taken.",err)
    })
}

/*
 * Supported conversations
 */

// design conversations here

function setupConversations() {

}
