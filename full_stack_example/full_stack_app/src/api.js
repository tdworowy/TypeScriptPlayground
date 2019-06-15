"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
exports.fetchContest = function (contestId) {
    return axios_1.get("/api/contests/" + contestId)
        .then(function (resp) { return resp.data; });
};
exports.fetchContestList = function () {
    return axios_1.get("/api/contests")
        .then(function (resp) { return resp.data; });
};
exports.fetchNames = function (namesIds) {
    return axios_1.get("/api/names/" + namesIds.join(","))
        .then(function (resp) { return resp.data; });
};
exports.addName = function (newName, contestId) {
    return axios_1.post("/api/names", { newName: newName, contestId: contestId })
        .then(function (resp) { return resp.data; });
};
