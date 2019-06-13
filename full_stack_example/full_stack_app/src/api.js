import axios from 'axios'

export const fetchContest = contestId => {
    return axios.get(`/api/contests/${contestId}`)
        .then(resp => resp.data)
}
export const fetchContestList = () => {
    return axios.get(`/api/contests`)
        .then(resp => resp.data.contests)
}
export const fetchNames = namesIds => {
    return axios.get(`/api/names/${namesIds.join(",")}`)
        .then(resp => resp.data.names)
}
