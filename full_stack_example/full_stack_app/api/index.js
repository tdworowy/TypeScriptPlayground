"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongodb_1 = require("mongodb");
var assert_1 = require("assert");
var config_1 = require("../config");
//TODO it might be wrong
var mdb;
mongodb_1.MongoClient.connect(config_1["default"].mongodbUri, function (err, client) {
    assert_1.strict.equal(null, err);
    mdb = client.db('test');
});
var router = express_1.Router();
router.get('/contests', function (req, res) {
    var contests = {};
    mdb.collection('contests').find()
        .project({
        categoryName: 1,
        contestName: 1
    })
        .forEach(function (contest) {
        contests[contest._id] = contest;
    })["finally"](function () {
        res.send({ contests: contests });
    });
});
router.get('/names/:nameIds', function (req, res) {
    var nameIds = req.params.nameIds.split(",").map(mongodb_1.ObjectId);
    var names = {};
    mdb.collection('names').find({ _id: { $in: nameIds } })
        .forEach(function (name) {
        names[name._id] = name;
    })["finally"](function () {
        res.send({ names: names });
    });
});
router.get('/contests/:contestId', function (req, res) {
    mdb.collection('contests')
        .findOne({ _id: new mongodb_1.ObjectId(req.params.contestId) })
        .then(function (contest) { return res.send(contest); })["catch"](function (error) {
        console.error(error);
        res.status(404).send("Bad request");
    });
});
router.post('/names', function (req, res) {
    var contestId = new mongodb_1.ObjectId(req.body.contestId);
    var name = req.body.newName;
    mdb.collection('names').insertOne({ name: name }).then(function (result) {
        return mdb.collection('contests').findOneAndUpdate({ _id: contestId }, { $push: { nameIds: result.insertedId } }, { returnOriginal: false }).then(function (doc) {
            return res.send({
                updatedContest: doc.value,
                newName: { _id: result.insertedId, name: name }
            });
        });
    })["catch"](function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});
exports["default"] = router;
