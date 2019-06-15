import {Router, Request, Response} from 'express'
import {MongoClient, ObjectId, Db} from 'mongodb'
import { strict as assert} from 'assert'
import config from '../config'

//TODO it might be wrong
let mdb: Db
MongoClient.connect(config.mongodbUri, (err, client)=>{
    assert.equal(null, err)
    mdb = client.db('test');
    
})
const router = Router()
interface IContests {
    [key: string]: string;
}
interface INames {
    [key: string]: string;
}

router.get('/contests', (req:Request, res:Response) => {
    let contests:IContests = {}
    mdb.collection('contests').find()
        .project({
           categoryName:1,
           contestName:1, 
        })
        .forEach((contest:any) => {
            console.log(contest)
            if(!contest) {
                res.send( { contests } )
                return            
            }
            contests[contest._id] = contest
        })
})
router.get('/names/:nameIds', (req:Request, res:Response) => {
    const nameIds = req.params.nameIds.split(",").map(ObjectId)
    let names:INames = {}
    mdb.collection('names').find({_id: { $in: nameIds }})
        .forEach( (name:any) => {
            if(!name) {
                res.send( { names } )
                return            
            }
            names[name._id] = name
        })
})
router.get('/contests/:contestId', (req:Request, res:Response) => {
    mdb.collection('contests')
        .findOne({_id: new ObjectId(req.params.contestId)})
        .then(contest => res.send(contest))
        .catch(error => {
            console.error(error)
            res.status(404).send("Bad request")
        })
    
})
router.post('/names', (req:Request, res:Response) => {
    const contestId = new ObjectId(req.body.contestId);
    const name = req.body.newName;
    // validation ...
    mdb.collection('names').insertOne({ name }).then(result =>
      mdb.collection('contests').findOneAndUpdate(
        { _id: contestId },
        { $push: { nameIds: result.insertedId }} ,
        {returnOriginal : false }
      ).then((doc) =>
        res.send({
          updatedContest: doc.value,
          newName: { _id: result.insertedId, name }
        })
      )
    )
    .catch(error => {
      console.error(error);
      res.status(404).send('Bad Request');
    });
  });


export default router