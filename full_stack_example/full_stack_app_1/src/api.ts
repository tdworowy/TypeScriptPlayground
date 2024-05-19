import { ObjectId } from "mongodb";
let axios = require("axios");
//TODO make it work
export const fetchContest = (contestId: ObjectId) => {
  return axios.get(`/api/contests/${contestId}`).then((resp: any) => resp.data);
};
export const fetchContestList = () => {
  return axios.get(`/api/contests`).then((resp: any) => resp.data.contests);
};
export const fetchNames = (namesIds: ObjectId[]) => {
  return axios
    .get(`/api/names/${namesIds.join(",")}`)
    .then((resp: any) => resp.data.names);
};
export const addName = (newName: string, contestId: ObjectId) => {
  return axios
    .post(`/api/names`, { newName, contestId })
    .then((resp: any) => resp.data);
};
