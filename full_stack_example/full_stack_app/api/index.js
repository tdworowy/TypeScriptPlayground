import { Router } from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import { strict as assert } from 'assert';
import config from '../config';
//TODO it might be wrong
let mdb;
MongoClient.connect(config.mongodbUri, (err, client) => {
    assert.equal(null, err);
    mdb = client.db('test');
});
const router = Router();
router.get('/contests', (req, res) => {
    let contests = {};
    mdb.collection('contests').find()
        .project({
        categoryName: 1,
        contestName: 1,
    })
        .forEach((contest) => {
        contests[contest._id] = contest;
    })
        .finally(() => {
        res.send({ contests });
    });
});
router.get('/names/:nameIds', (req, res) => {
    const nameIds = req.params.nameIds.split(",").map(ObjectId);
    let names = {};
    mdb.collection('names').find({ _id: { $in: nameIds } })
        .forEach((name) => {
        names[name._id] = name;
    })
        .finally(() => {
        res.send({ names });
    });
});
router.get('/contests/:contestId', (req, res) => {
    mdb.collection('contests')
        .findOne({ _id: new ObjectId(req.params.contestId) })
        .then(contest => res.send(contest))
        .catch(error => {
        console.error(error);
        res.status(404).send("Bad request");
    });
});
router.post('/names', (req, res) => {
    const contestId = new ObjectId(req.body.contestId);
    const name = req.body.newName;
    mdb.collection('names').insertOne({ name }).then(result => mdb.collection('contests').findOneAndUpdate({ _id: contestId }, { $push: { nameIds: result.insertedId } }, { returnOriginal: false }).then((doc) => res.send({
        updatedContest: doc.value,
        newName: { _id: result.insertedId, name }
    })))
        .catch(error => {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});
export default router;
