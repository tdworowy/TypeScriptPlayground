let axios = require("axios");

import ReactDOMServer from 'react-dom/server'
import App from './src/components/App'
import config from './config'
import { ObjectId } from 'mongodb';
import React from 'react'

const getApiUrl = (contestId: ObjectId) => {
    if(contestId) {
       return `${config.serverUrl}/api/contests/${contestId}`
    }
    return `${config.serverUrl}/api/contests`
}
const getInitialData = (contestId:ObjectId, apiData:any) => {
    if (contestId) {
        return {
            currentContestId:  apiData._id,
            contests: {
                [apiData._id]: apiData
            }
        }
    }
    return {
        contests: apiData.contests
    }
}
const serverRender = (contestId:ObjectId) => 
    axios.get(getApiUrl(contestId))
        .then((resp:any) => {
            const initialData = getInitialData(contestId, resp.data)
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialData={initialData}/>),
                initialData: initialData
            } 
        
        })

export default serverRender