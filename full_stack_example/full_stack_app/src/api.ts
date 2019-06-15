import { ObjectId } from 'mongodb'
import {Response, get, post} from 'axios'
//TODO make it work
export const fetchContest = (contestId:ObjectId) => {
    return get(`/api/contests/${contestId}`)
        .then((resp:Response) => resp.data)
}
export const fetchContestList = () => {
    return get(`/api/contests`)
        .then((resp:Response) => resp.data.contests)
}
export const fetchNames = (namesIds:ObjectId[]) => {
    return get(`/api/names/${namesIds.join(",")}`)
        .then((resp:Response) => resp.data.names)
}
export const addName = (newName:string, contestId:ObjectId) => {
    return post(`/api/names`, { newName, contestId })
        .then((resp:Response) => resp.data)
}