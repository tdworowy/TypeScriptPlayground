import express from 'express'
import data from '../src/testData'
const router = express.Router()

const _contests = data.contests.reduce( (obj, contest) => {
    obj[contest.id] = contest
    return obj
}, {})

router.get('/contests', (req, res) => {
    res.send({
        contests: _contests
    })
})
router.get('/contests/:contestId', (req, res) => {
    let contest = _contests[req.params.contestId]
    contest.description = "Test description."
    res.send(contest)
})

export default router